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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        magni placeat sint voluptatum iure iste facili
      </motion.p>
      <motion.div className={`container  ${styles.flex}`}>
        <motion.div
          className={styles.content}
          animate={inView ? { x: [-1000, 0], opacity: 1 } : { opacity: 0 }}
          // transition={{ delay: 0 }}
        >
          <Image
            className={styles.image}
            src='/marketing.jpg'
            alt='web'
            height='400px'
            width='700px'
          />
        </motion.div>
        <motion.div
          className={styles.sideContent}
          animate={inView ? { x: [1000, 0], opacity: 1 } : { opacity: 0 }}
        >
          {' '}
          <p>
            <i className={`fas fa-check-circle ${styles.icons}`}></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aut consequatur nisi
          </p>
          <p>
            <i className={`fas fa-check-circle ${styles.icons}`}></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aut consequatur nisi
          </p>
          <p>
            <i className={`fas fa-check-circle ${styles.icons}`}></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aut
          </p>
          <p>
            <i className={`fas fa-check-circle ${styles.icons}`}></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aut consequatur nisi
          </p>
          <p>
            <i className={`fas fa-check-circle ${styles.icons}`}></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aut consequatur nisi
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Why;
