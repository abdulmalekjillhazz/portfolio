'use client';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="rounded-full p-2 text-[var(--text-muted)] transition-[background-color,transform,color] duration-200 ease-out hover:scale-110 hover:bg-[var(--bg)] hover:text-[var(--accent)] active:[&>span>svg]:scale-95 active:[&>span>svg]:rotate-30"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="[&>svg]:transition-transform [&>svg]:duration-[400ms]" aria-hidden="true">
        {theme === 'light' ? (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              fill="currentColor"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
