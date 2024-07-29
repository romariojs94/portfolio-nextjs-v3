'use client';
import React, { useEffect, useState } from 'react';

import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contato from '@/components/Contato';

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
      <>
        <Hero isVisible={isVisible} />
        <Projects isVisible={isVisible} />
        <Contato isVisible={isVisible} />
        <Blog isVisible={isVisible} />
      </>
  );
}
