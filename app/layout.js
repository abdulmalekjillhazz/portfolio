import './globals.css';
import './theme.css';
import Sidebar from '../components/Sidebar';
import { ThemeProvider } from '../hooks/useTheme';

export const metadata = {
  title: 'Abdul Malek | MERN Stack Developer',
  description: 'MERN stack developer passionate about building performant, delightful web apps.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="app-layout">
            <Sidebar />
            <main className="main-content">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
