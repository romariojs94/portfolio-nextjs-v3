'use client';
import React from 'react';
import Link from 'next/link';

import {
  riseWithFade,
  staggerChildren,
  wordAnimation,
} from '@/utils/animations';
import { motion } from 'framer-motion';
export default function Blog() {
  const posts = [
    {
      slug: 'hello-world',
      title: 'Hello, World!',
      excerpt: 'This is my first post on my new blog! I hope you enjoy it.',
      data: '13-06-2024',
      textoAlternativo: 'Photo by Minh Pham',
      image:
        'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    },
  ];
  return (
    <>
      <motion.main
        initial="initial"
        animate="animate"
        className="py-20"
        id="blog"
      >
        <motion.div variants={riseWithFade}>
          {/* <!-- text - start --> */}
          <h2 className="text-center font-bold text-gray-800 text-3xl sm:text-4xl md:text-6xl mb-8 md:mb-16">
            <AnimatedWords title="Blog" />
          </h2>
          {/* <!-- text - end --> */}
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {/* <!-- article - start --> */}
            {posts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
              >
                <img
                  src={post.image}
                  loading="lazy"
                  alt={post.textoAlternativo}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                <div className="relative mt-auto p-4">
                  <span className="block text-sm text-gray-200">
                    {post.data}
                  </span>
                  <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                    {post.title}
                  </h2>

                  <span className="font-semibold text-slate-200">
                    Leia mais
                  </span>
                </div>
              </Link>
            ))}
            {/* <!-- article - end --> */}
          </div>
        </motion.div>
      </motion.main>
    </>
  );
}
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
