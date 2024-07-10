import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';
import Blog from '@/components/Blog';
export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Projects />
      <Contato />
      <Blog />
      <Footer />
    </div>
  );
}
