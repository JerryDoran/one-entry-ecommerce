import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OneEntry',
  description: 'Smart Ecommerce shopping',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-gray-900'>
      <body className={inter.className}>
        <main className='bg-gray-900'>{children}</main>
      </body>
    </html>
  );
}
