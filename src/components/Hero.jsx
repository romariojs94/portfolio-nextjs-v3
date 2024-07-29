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
        className="w-full py-20 flex flex-col gap-2 justify-center items-start relative h-auto md:h-[calc(100vh-90px)]"
      >
        <div className='grid justify-center place-content-center w-full'>
          <motion.h1 className="text-xl sm:text-2xl font-normal text-[#181717] z-0" variants={riseWithFade}>  
            Romário J. Santos
          </motion.h1>
          <h2 className="text-left sm:max-w-none break-all text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-extrabold text-[#181717] z-0">
            <AnimatedWords title="Freelance frontend Developer" />
          </h2>
          <motion.p
            className="text-base sm:text-lg text-[#525252]"
            variants={riseWithFade}
          >
            Localizado em <span>Blumenau/SC</span>
          </motion.p>
        </div>
        <motion.div
          className="flex gap-1 justify-center mt-2"
          variants={riseWithFade}
        >
        </motion.div>
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
