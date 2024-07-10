'use client';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';
import Blog from '@/components/Blog';


import React, { useEffect, useState } from 'react';
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    const scrollTop = window.scrollY;
    const triggerPoint = 100; 
    
    if (scrollTop > triggerPoint) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition(); 

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);
  return (
    <div className="w-full">
      <Hero />
      <Projects isVisible={isVisible} />
      <Contato isVisible={isVisible} />
      <Blog isVisible={isVisible} />
      <Footer />
    </div>
  );
}
