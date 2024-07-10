import './globals.css';
import { Syne } from 'next/font/google';
import Header from '../components/header';

const syne = Syne({ subsets: ['latin'] });

export const metadata = {
  title: 'Romário J. Santos - Frontend Developer',
  description:
    'Frontend Developer, React, Next.js, Tailwind CSS, WordPress REST API.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${syne.className} max-w-[98vw] px-2 mx-auto`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
