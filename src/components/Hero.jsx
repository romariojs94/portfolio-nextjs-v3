'use client';
import Icons from '../components/Icons';
import {
  riseWithFade,
  staggerChildren,
  wordAnimation,
} from '@/utils/animations';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <motion.main
        initial="initial"
        animate="animate"
        className="w-full h-[calc(100vh-90px)] flex flex-col justify-center items-start"
      >
        <h2 className="text-left text-4xl break-all sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[10rem] font-extrabold text-[#181717] z-0">
          <AnimatedWords title="Web Developer" />
        </h2>
        <motion.p
          className="text-base sm:text-lg text-[#525252]"
          variants={riseWithFade}
        >
          Localizado em <span>Blumenau/SC</span>
        </motion.p>
        <motion.div
          className="flex gap-1 justify-center mt-2"
          variants={riseWithFade}
        >
          <Icons color="#000" />
        </motion.div>
        <div className="absolute bottom-3 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-mouse"
            viewBox="0 0 16 16"
          >
            <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5" />
          </svg>
        </div>
      </motion.main>
    </>
  );
};

export default Hero;

const AnimatedWords = ({ title }) => {
  return (
    <motion.span variants={staggerChildren} className="grid gap-y-0">
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
