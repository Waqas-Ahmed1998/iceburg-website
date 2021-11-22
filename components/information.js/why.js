import { useEffect } from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './why.module.scss';
import useInView from 'react-cool-inview';

const Why = function () {
  const { observe, inView } = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    inView && document.getElementById('why').classList.remove('active');
  }, [inView]);
  return (
    <section ref={observe} id='why' className={`active ${styles.why}`}>
      <motion.h2
        className={styles.heading}
        animate={inView ? { x: [10, 1], opacity: 1 } : {}}
        // transition={{ duration: 1 }}
      >
        Why Webname
      </motion.h2>
      <motion.div
        className={styles.bottomLine}
        animate={inView ? { width: [0, 60], opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.2 }}
      ></motion.div>
      <motion.p animate={inView ? { opacity: 1 } : { opacity: 0 }}>
        We're a digital agency that not only focuses on your business, but also
        focuses on you.
      </motion.p>
      <motion.div className={`container  ${styles.flex}`}>
        <motion.div
          className={styles.content}
          animate={inView ? { x: [-1000, 0], opacity: 1 } : { opacity: 0 }}
          // transition={{ delay: 0 }}
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
        <motion.div
          className={styles.sideContent}
          animate={inView ? { x: [1000, 0], opacity: 1 } : { opacity: 0 }}
        >
          {' '}
          <p>
            <i className={`fas fa-check-circle ${styles.icons}`}></i>
            You won't just be another piece in our puzzle that's pushed into the
            confines of organizational strategy. Instead, we'll work with you to
            define success for your business and tailor campaigns around it.
          </p>
          <p>
            <i className={`fas fa-check-circle ${styles.icons}`}></i>
            We're small enough to provide personalized service yet large enough
            to tackle any project size- creatively or strategically.
          </p>
          <p>
            <i className={`fas fa-check-circle ${styles.icons}`}></i>
            Our extensive experience in design and development ensures each
            outcome is high quality with the latest trends in usability and
            creativity
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Why;
