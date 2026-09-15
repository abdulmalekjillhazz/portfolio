'use client';

import { useEffect, useRef, useState } from 'react';
import { Bot, Send, Sparkles, Trash2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const starterMessage = {
  role: 'assistant',
  content: "Hi, I'm Abdul's portfolio assistant. Ask me about his skills, projects, or availability.",
};

const suggestedQuestions = [
  'What technologies does Abdul use?',
  'Tell me about Abdul\'s projects.',
  'Is Abdul available for freelance work?',
];

export default function PortfolioAgent() {
  const [messages, setMessages] = useState([starterMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  async function sendMessage(event, suggestedMessage) {
    event?.preventDefault();

    const message = (suggestedMessage ?? input).trim();
    if (!message || isLoading) return;

    const conversation = messages.map(({ role, content }) => ({ role, content }));
    setMessages((current) => [...current, { role: 'user', content: message }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history: conversation }),
      });

      const rawText = await response.text();
      let data = {};

      if (rawText) {
        try {
          data = JSON.parse(rawText);
        } catch {
          data = {
            error: 'The assistant returned an invalid response. Please try again.',
          };
        }
      }

      if (!response.ok) {
        throw new Error(data.error || 'The assistant is unavailable right now.');
      }

      setMessages((current) => [...current, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: error.message || 'The assistant is unavailable right now. Please try again shortly.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function clearConversation() {
    if (isLoading) return;
    setMessages([starterMessage]);
    setInput('');
  }

  return (
    <section id="agent" className="py-20">
      <RevealOnScroll>
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              <Sparkles size={16} aria-hidden="true" />
              AI assistant
            </p>
            <h2 className="text-3xl font-bold">Ask about my work</h2>
          </div>
          <button
            type="button"
            onClick={clearConversation}
            disabled={isLoading}
            aria-label="Clear conversation"
            title="Clear conversation"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Trash2 size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
          <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card-bg)] shadow-[4px_4px_0_var(--card-shadow)]">
            <div className="flex items-center gap-3 border-b border-[var(--border)] px-5 py-4">
              <span className="flex size-9 items-center justify-center rounded-lg bg-[var(--bg-secondary)] text-[var(--accent)]">
                <Bot size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold">Abdul's assistant</h3>
                <p className="text-sm text-[var(--text-muted)]">Online for portfolio questions</p>
              </div>
            </div>

            <div className="flex min-h-80 max-h-[30rem] flex-col gap-4 overflow-y-auto px-5 py-5" aria-live="polite">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-md bg-[var(--bg-secondary)] text-[var(--accent)]">
                      <Bot size={16} aria-hidden="true" />
                    </span>
                  )}
                  <p
                    className={`max-w-[85%] whitespace-pre-wrap rounded-lg px-4 py-3 text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'bg-[var(--accent)] text-white'
                        : 'bg-[var(--bg-secondary)] text-[var(--text)]'
                    }`}
                  >
                    {message.content}
                  </p>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[var(--bg-secondary)] text-[var(--accent)]">
                    <Bot size={16} aria-hidden="true" />
                  </span>
                  <div className="flex items-center gap-1 rounded-lg bg-[var(--bg-secondary)] px-4 py-3" aria-label="Assistant is thinking">
                    <span className="size-1.5 animate-bounce rounded-full bg-[var(--accent)]" />
                    <span className="size-1.5 animate-bounce rounded-full bg-[var(--accent)] [animation-delay:120ms]" />
                    <span className="size-1.5 animate-bounce rounded-full bg-[var(--accent)] [animation-delay:240ms]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={sendMessage} className="flex items-end gap-3 border-t border-[var(--border)] p-4">
              <label className="sr-only" htmlFor="agent-message">Ask the portfolio assistant</label>
              <textarea
                id="agent-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Ask a question..."
                maxLength={1000}
                rows={1}
                disabled={isLoading}
                className="min-h-11 flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none placeholder:text-[var(--text-muted)] disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                title="Send message"
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)] text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </form>
          </div>

          <div className="space-y-3 lg:pt-2">
            <p className="text-sm font-semibold text-[var(--text)]">Popular questions</p>
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => sendMessage(null, question)}
                disabled={isLoading}
                className="w-full border-l-2 border-[var(--border)] px-3 py-2 text-left text-sm leading-relaxed text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
