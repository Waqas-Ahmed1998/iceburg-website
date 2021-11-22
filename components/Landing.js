import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './landing.module.scss';
import useInView from 'react-cool-inview';
import Image from 'next/image';
import Link from 'next/link';
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
        <Link
          // className='btnNavigator'
          href='#navbar'
          // animate={!inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <a>
            <i className='btnNavigator fas fa-arrow-up'></i>
          </a>
        </Link>
      )}
      <div id='landing' className={`container active ${styles.flex}`}>
        <motion.div
          className={styles.content}
          animate={inView ? { x: [-1000, 0] } : {}}
          transition={{ duration: duration }}
        >
          {' '}
          <h1 className={styles.welcome}>
            Creative Digital Media Agency in Calgary
          </h1>
          <p className={styles.description}>
            We work with business innovators, business owners and entrepreneurs
            to enhance their brand's success through digital media. We
            understand that every company strives for the best branding efforts
            in order to blow out competition!
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
<i className='fas fa-arrow-up'>Hello</i>;
// animate={inView ? { x: [-1000, 0] } : {}}
// transition={{ duration: duration }}
export default LandingPage;
