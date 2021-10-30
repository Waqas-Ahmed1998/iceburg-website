import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './landing.module.scss';
import useInView from 'react-cool-inview';
import Image from 'next/image';

const LandingPage = function () {
  const duration = 0.5;
  const { observe, inView, scrollDirection } = useInView({
    threshold: 0.25,
    // unobserveOnEnter: true,
  });

  const { vertical } = scrollDirection;

  useEffect(() => {
    if (inView) {
      document.getElementById('landing').classList.remove('active');
    }
  }, [inView]);

  return (
    <section ref={observe} className={` ${styles.landing}`}>
      {vertical === 'up' && (
        <motion.a
          className='btnNavigator'
          href='#navbar'
          animate={!inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <i className='fas fa-arrow-up'></i>
        </motion.a>
      )}
      <div id='landing' className={`container active ${styles.flex}`}>
        <motion.div
          className={styles.content}
          animate={inView ? { x: [-1000, 0] } : {}}
          transition={{ duration: duration }}
        >
          {' '}
          <h1 className={styles.welcome}>Lorem ipsum dolor sit helo dasklf</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            reiciendis blanditiis dicta beatae?.
          </p>
          <a className={styles.btnAbout} href='#about'>
            About Us
          </a>
          <a className={styles.btnService} href='#services'>
            Services
          </a>
        </motion.div>
        <motion.div
          className={styles.image}
          animate={inView ? { scale: [2, 1], opacity: [0, 1] } : {}}
          transition={{ duration: '0.3' }}
        >
          <Image
            className={styles.image}
            src='/marketing.png'
            alt='web'
            height={550}
            width={800}
            priority={true}
          />
        </motion.div>
      </div>
    </section>
  );
};
// animate={inView ? { x: [-1000, 0] } : {}}
// transition={{ duration: duration }}
export default LandingPage;
