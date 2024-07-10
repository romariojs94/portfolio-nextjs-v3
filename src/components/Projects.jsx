'use client';
import {
  riseWithFade,
  staggerChildren,
  wordAnimation,
} from '@/utils/animations';
import { motion } from 'framer-motion';
const Projects = () => {
  return (
    <>
      <motion.section
        id="projects"
        className="py-10 sm:py-12 md:py-16 lg:py-20 w-full"
        initial="initial"
        animate="animate"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1] py-2 lg:text-6xl font-bold text-center">
          <AnimatedWords title="Projetos recentes" />
        </h2>
        <motion.p
          className="text-center max-w-[55ch] mx-auto -mt-[10px]"
          variants={riseWithFade}
        >
          Alguns projetos selecionados que mostram minha paixão por criar
          layouts e elevar o desenvolvimento front-end a um novo nível.
        </motion.p>

        <div className="flex flex-col lg:flex-row w-full gap-10 pt-20">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full"
              src="/images/quant-capital.jpg"
              alt="Quant Capital"
              title='Quant Capital'
              height={720}
              width={960}

            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl leading-[1] py-2 lg:text-5xl font-bold">
              <AnimatedWords title="Projeto número 1" />
            </h3>
            <motion.p
              className="md:max-w-[45ch] -mt-[6px]"
              variants={riseWithFade}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              suscipit, urna nec aliquam.
            </motion.p>
            <div className="flex flex-wrap items-center gap-2 mt-3 sm:mt-4 md:mt-6 lg:mt-8">
              <a
                href="/"
                className="flex w-full sm:w-fit items-center justify-center gap-3 bg-gradient-to-br from-zinc-800 to-zinc-950 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:shadow-2xl hover:shadow-indigo-500/40 active:scale-95"
              >
                Visitar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="64"
                    y1="192"
                    x2="192"
                    y2="64"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <polyline
                    points="88 64 192 64 192 168"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></polyline>
                </svg>
              </a>
              <a
                href=""
                className="flex w-full sm:w-fit cursor-pointer items-center justify-center gap-3 bg-zinc-800 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:bg-zinc-950 active:scale-95"
              >
                Código fonte
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                >
                  <path
                    d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Projects;

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
