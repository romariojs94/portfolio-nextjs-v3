import './globals.css';
import { Syne } from 'next/font/google';
import Header from '../components/header';
import Footer from '../components/Footer.jsx';

const syne = Syne({ subsets: ['latin'] });

export const metadata = {
  title: 'Romário J. Santos - Web Developer localizado em Blumenau/SC',
  description:
    'Web Developer localizado em Blumenau/SC, ofereço soluções personalizadas para websites e aplicações. Aprimorando a presença online do seu negócio. Entre em contato para elevar seu projeto novo projeto'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${syne.className} max-w-[98vw] px-2 mx-auto`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
