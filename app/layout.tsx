import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import DependancyProvider from '@/providers/DependancyProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'StudyClock.com - Pomodoro Timer & Focus Clock',
  description:
    "Boost your academic success with StudyClock.com's elegant dark mode focus timer. Features include pomodoro technique, countdown timer, and beautiful visual themes.",
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'StudyClock',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'StudyClock.com',
    title: 'StudyClock.com - Pomodoro Timer & Focus Clock',
    description:
      "Boost your academic success with StudyClock.com's elegant dark mode focus timer.",
  },
  twitter: {
    card: 'summary',
    title: 'StudyClock.com - Pomodoro Timer & Focus Clock',
    description:
      "Boost your academic success with StudyClock.com's elegant dark mode focus timer.",
  },
};

export const viewport = {
  themeColor: '#6366f1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <DependancyProvider>{children}</DependancyProvider>
      </body>
    </html>
  );
}
