import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '../components/ui/toaster';
import { cn } from '../lib/utils';
import { ThemeProvider } from '../components/theme-provider';
import ClickSpark from '../components/Animations/ClickSpark';

export const metadata: Metadata = {
  title: 'AliRaza Portfolio',
  description: 'Portfolio of Ali Raza, a Full Stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body bg-background text-foreground antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <ClickSpark>

              {children}
            </ClickSpark>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
