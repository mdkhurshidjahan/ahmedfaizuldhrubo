import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Ahmed Faizul Haque Dhrubo - Robotics & AI Researcher',
  description: 'Robotics & AI Researcher | IoT Innovator | Machine Learning Enthusiast at North South University, Bangladesh',
  keywords: ['robotics', 'artificial intelligence', 'IoT', 'machine learning', 'research', 'academic'],
  authors: [{ name: 'Ahmed Faizul Haque Dhrubo' }],
  openGraph: {
    title: 'Ahmed Faizul Haque Dhrubo - Robotics & AI Researcher',
    description: 'Explore cutting-edge research in robotics, AI, and IoT innovation',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-inter antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}