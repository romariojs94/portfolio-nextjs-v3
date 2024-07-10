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

const Contato = () => {
  return (
    <>
      <motion.section
        initial="initial"
        animate="animate"
        className="h-[calc(100vh-154px)] flex flex-col justify-center sm:w-4/5 mx-auto"
        id="contato"
      >
        <div className="flex w-full max-w-[95vw] md:max-w-[85vw] lg:max-w-[100vw] flex-col items-center py-10 md:py-20 px-8 bg-gradient-to-r from-black to-black/95 z-0">
          <h2
            className={`${syne.className} bg-gradient-to-r from-neutral-600 via-slate-200 to-neutral-50 bg-clip-text text-center font-semibold leading-[1] lg:leading-10 tracking-tighter text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[17ch] lg:max-w-[20ch]`}
          >
            <AnimatedWords title="Fique à vontade para entrar em contato." />
          </h2>
          <motion.p
            variants={riseWithFade}
            className={`${syne.className} mt-4 text-center text-sm sm:text-lg text-slate-400 max-w-[32ch] lg:max-w-[42ch]`}
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
