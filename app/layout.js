import './globals.css';
import Sidebar from '../components/Sidebar';
import { ThemeProvider } from '../hooks/useTheme';

export const metadata = {
  title: 'Abdul Malek | MERN Stack Developer',
  description: 'MERN stack developer passionate about building performant, delightful web apps.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth scroll-pt-20">
      <body className="min-h-screen bg-[var(--bg)] font-sans leading-relaxed text-[var(--text)] transition-colors duration-300">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col md:flex-row">
            <Sidebar />
            <main className="flex-1 px-4 pb-12 pt-20 md:ml-72 md:px-12 md:pb-12 md:pt-16">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
