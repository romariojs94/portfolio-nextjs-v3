'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence, color } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className="text-left">
          <svg
            width="90"
            height="90"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="120" height="120" fill="none" />
            <path
              fillRule="none"
              clipRule="none"
              d="M23.337 77.2548L31.6243 64.1109H36.289V77.2548H43.7823L43.6631 42.9032H41.3694L39.2914 42.8815H36.4697L32.2694 43.0038C28.0348 43.0038 24.743 43.8513 22.3941 45.5462C20.0452 47.2092 18.8707 49.6237 18.8707 52.7898C18.8707 54.6447 19.185 56.2117 19.8136 57.4909C20.4422 58.7382 21.2362 59.7455 22.1956 60.5131C23.155 61.2486 24.1144 61.8083 25.0738 62.192L15 77.2548H23.337ZM29.2423 49.3839C30.1686 49.0961 31.2769 48.9521 32.5672 48.9521H36.289V58.2105H32.7657C30.6483 58.2105 29.0603 57.7787 28.0017 56.9153C26.9761 56.0198 26.4633 54.8206 26.4633 53.3175C26.4633 52.2621 26.6949 51.4146 27.1581 50.775C27.6543 50.1354 28.3491 49.6717 29.2423 49.3839Z"
              fill="black"
            />
            <path
              d="M43.6624 51.0848V42.904H62.0705V77.2548H53.24V51.0848H43.6624Z"
              fill="black"
            />
            <path
              d="M83.6032 77.2548C79.3464 77.2548 75.5878 76.5769 72.3274 75.2209C69.1122 73.8649 66.5989 71.8988 64.7875 69.3225C62.9762 66.701 62.0705 63.4919 62.0705 59.6952C62.0705 55.8985 62.9762 52.6894 64.7875 50.0679C66.5989 47.4012 69.1122 45.3899 72.3274 44.0339C75.5878 42.678 79.3464 42 83.6032 42C87.8599 42 91.5732 42.678 94.7431 44.0339C97.9583 45.3899 100.472 47.4012 102.283 50.0679C104.094 52.6894 105 55.8985 105 59.6952C105 63.4919 104.094 66.701 102.283 69.3225C100.472 71.8988 97.9583 73.8649 94.7431 75.2209C91.5732 76.5769 87.8599 77.2548 83.6032 77.2548ZM83.6032 70.4751C85.9127 70.4751 87.9957 70.0683 89.8524 69.2547C91.7543 68.3959 93.2487 67.1756 94.3355 65.5936C95.4676 63.9665 96.0337 62.0003 96.0337 59.6952C96.0337 57.3901 95.4676 55.424 94.3355 53.7968C93.2487 52.1245 91.777 50.8589 89.9203 50.0001C88.0637 49.1414 85.9579 48.712 83.6032 48.712C81.2937 48.712 79.1879 49.1414 77.286 50.0001C75.3841 50.8589 73.867 52.1019 72.7349 53.729C71.6028 55.3562 71.0368 57.3449 71.0368 59.6952C71.0368 62.0003 71.5802 63.9665 72.667 65.5936C73.7991 67.1756 75.3161 68.3959 77.2181 69.2547C79.12 70.0683 81.2484 70.4751 83.6032 70.4751Z"
              fill="black"
            />
          </svg>
        </Link>
        <div className="absolute right-40 bg-black text-white p-2 rounded-md hidden sm:block">
          <span className="absolute flex h-3 w-3 -top-1 -right-1">
            <span className="absolute inline-flex h-full w-full bg-green-400 rounded-full animate-ping opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
          </span>
          <p>Disponivel para novos projetos</p>
        </div>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ''
            }`}
          ></div>
        </div>
      </header>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  );
}
