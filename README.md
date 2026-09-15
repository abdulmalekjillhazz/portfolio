# Portfolio

## AI Assistant Setup

1. Create `.env.local` from `.env.example`.
2. Add your `GEMINI_API_KEY` to `.env.local`.
3. Optionally set `GEMINI_MODEL`; the default is `gemini-2.0-flash`.
4. If needed, you can also keep `OPENAI_API_KEY` and `OPENAI_MODEL` for the OpenAI route.

The key is read only by `app/api/agent/route.js` and is never exposed to the browser.
