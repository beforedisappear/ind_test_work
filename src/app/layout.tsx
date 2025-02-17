import './globals.css';

import { ppNeueMontrealFont } from '@/fonts/ppNeueMontreal';

import { Header } from '@/modules/header';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={ppNeueMontrealFont.className}>
        <div id='wrapper'>
          <Header />

          <main>{children}</main>

          {/* footer */}
        </div>
      </body>
    </html>
  );
}
