'use client';
import React from 'react';
import Icons from '@/components/Icons';
import { Syne } from 'next/font/google';

import {
  riseWithFade,
  staggerChildren,
  wordAnimation,
} from '@/utils/animations';
import { motion } from 'framer-motion';
const syne = Syne({ subsets: ['latin'] });

const Contato = ({isVisible}) => {
  return (
    <>
      <motion.section
        initial="initial"
        animate={isVisible ? 'animate' : 'initial'}
        className="py-10 sm:py-12 md:py-16 lg:py-20"
        id="contato"
      >
        <div className="flex flex-col w-full max-w-[95vw] py-10 md:py-20 px-8 bg-gradient-to-r from-black to-black/95 z-0">
          <h2
            className={`${syne.className} bg-gradient-to-r from-neutral-600 via-slate-200 to-neutral-50 bg-clip-text font-semibold leading-[1] lg:leading-10 tracking-tighter text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[17ch] lg:max-w-[20ch]`}
          >
            <AnimatedWords title="Fique à vontade para entrar em contato." />
          </h2>
          <motion.p
            variants={riseWithFade}
            className={`${syne.className} mt-4 text-sm sm:text-lg text-slate-400 max-w-[32ch] lg:max-w-[42ch]`}
          >
            Será um prazer trocar ideias, compartilhar experiências e criar
            conexões significativas.
          </motion.p>
          <motion.div variants={riseWithFade} className="flex gap-3 mt-4">
            <Icons color="#000" />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Contato;
const AnimatedWords = ({ title }) => {
  return (
    <motion.span variants={staggerChildren}>
      {title.split(' ').map((word, idx) => (
        <div key={idx} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block overflow-hidden"
            variants={wordAnimation}
          >
            {word + '\u00A0'}
          </motion.span>
        </div>
      ))}
    </motion.span>
  );
};
