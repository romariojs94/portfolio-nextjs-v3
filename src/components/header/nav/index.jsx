import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './Link';
import Curve from './Curve';

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projetos',
    href: '#projects',
  },
  {
    title: 'Contato',
    href: '#contato',
  },
  {
    title: 'Blog',
    href: '#blog',
  },
];
export default function Index({ setIsActive }) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          onClickCapture={() => setIsActive(false)}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>MENU</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
