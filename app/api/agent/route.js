const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY_MESSAGES = 8;
const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 10;
const requestCounts = new Map();

const instructions = `You are the portfolio assistant for Abdul Malek, a full-stack web developer from Bangladesh. Answer questions about Abdul's skills, projects, and availability in a concise, friendly way. Only use the profile below; if information is unavailable, say so and suggest contacting Abdul by email.

Profile:
- Abdul builds responsive, high-performance web applications.
- His stack includes React, Next.js, Node.js, Express.js, MongoDB, and JavaScript.
- He has built a simple AI agent, a daily routine tracker, a typing speed tracker, and a custom e-commerce store.
- He is open to freelance work, new opportunities, and collaborations.
- Contact email: abdulmalek67343367@gmail.com.`;

function getReply(response) {
  if (typeof response.output_text === 'string' && response.output_text.trim()) {
    return response.output_text.trim();
  }

  return response.output
    ?.filter((item) => item.type === 'message')
    .flatMap((item) => item.content ?? [])
    .filter((content) => content.type === 'output_text')
    .map((content) => content.text)
    .join('')
    .trim();
}

function getGeminiReply(response) {
  return response.candidates
    ?.map((candidate) => candidate.content?.parts ?? [])
    .flat()
    .filter((part) => part.text)
    .map((part) => part.text)
    .join('')
    .trim();
}

function cleanHistory(history) {
  if (!Array.isArray(history)) return [];

  return history
    .slice(-MAX_HISTORY_MESSAGES)
    .filter(
      (item) =>
        item &&
        (item.role === 'user' || item.role === 'assistant') &&
        typeof item.content === 'string',
    )
    .map(({ role, content }) => ({ role, content: content.slice(0, MAX_MESSAGE_LENGTH) }));
}

function getGeminiContents(history, message) {
  return [
    ...cleanHistory(history).map(({ role, content }) => ({
      role: role === 'assistant' ? 'model' : 'user',
      parts: [{ text: content }],
    })),
    {
      role: 'user',
      parts: [{ text: message }],
    },
  ];
}

function isRateLimited(request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  const clientId = forwardedFor?.split(',')[0].trim() || request.headers.get('x-real-ip') || 'unknown';
  const now = Date.now();
  const current = requestCounts.get(clientId);

  if (!current || now - current.startedAt >= RATE_LIMIT_WINDOW_MS) {
    requestCounts.set(clientId, { count: 1, startedAt: now });
    return false;
  }

  current.count += 1;
  return current.count > MAX_REQUESTS_PER_WINDOW;
}

export async function POST(request) {
  const geminiApiKey = process.env.GEMINI_API_KEY;
  const openAiApiKey = process.env.OPENAI_API_KEY;

  if (!geminiApiKey && !openAiApiKey) {
    return Response.json(
      { error: 'The assistant needs a GEMINI_API_KEY or OPENAI_API_KEY before it can respond.' },
      { status: 503 },
    );
  }

  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: 'Please send a valid message.' }, { status: 400 });
  }

  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (!message) {
    return Response.json({ error: 'Please enter a message.' }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return Response.json(
      { error: `Messages must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
      { status: 400 },
    );
  }

  if (isRateLimited(request)) {
    return Response.json(
      { error: 'Too many messages. Please wait a moment and try again.' },
      { status: 429 },
    );
  }

  try {
    if (geminiApiKey) {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL || 'gemini-2.0-flash'}:generateContent?key=${geminiApiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: instructions }],
            },
            contents: getGeminiContents(payload.history, message),
            generationConfig: {
              maxOutputTokens: 300,
            },
          }),
          cache: 'no-store',
        },
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error('Gemini response error:', response.status, data.error?.message || data);
        return Response.json(
          { error: 'The assistant is unavailable right now. Please try again shortly.' },
          { status: 502 },
        );
      }

      const reply = getGeminiReply(data);

      if (!reply) {
        return Response.json(
          { error: 'The assistant did not return a response. Please try again.' },
          { status: 502 },
        );
      }

      return Response.json({ reply });
    }

    if (!openAiApiKey) {
      return Response.json(
        { error: 'The assistant needs a GEMINI_API_KEY or OPENAI_API_KEY before it can respond.' },
        { status: 503 },
      );
    }

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${openAiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-5',
        instructions,
        input: [...cleanHistory(payload.history), { role: 'user', content: message }],
        max_output_tokens: 300,
        store: false,
      }),
      cache: 'no-store',
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error('OpenAI response error:', response.status, data.error?.message);
      return Response.json(
        { error: 'The assistant is unavailable right now. Please try again shortly.' },
        { status: 502 },
      );
    }

    const reply = getReply(data);

    if (!reply) {
      return Response.json(
        { error: 'The assistant did not return a response. Please try again.' },
        { status: 502 },
      );
    }

    return Response.json({ reply });
  } catch (error) {
    console.error('Assistant request failed:', error);
    return Response.json(
      { error: 'The assistant is unavailable right now. Please try again shortly.' },
      { status: 502 },
    );
  }
}
