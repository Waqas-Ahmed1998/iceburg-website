import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useInView from 'react-cool-inview';

const Test = function () {
  const { observe, inView, scrollDirection } = useInView({
    threshold: 0.25,
  });
  useEffect(() => {
    inView && document.getElementById('test').classList.remove('active');
  }, [inView]);
  return (
    <section ref={observe} id='test' className={`left active`}>
      <motion.h2
        className={`heading`}
        animate={inView ? { x: [10, 1], opacity: [0, 1] } : {}}
      >
        {' '}
        WEB DESIGN{' '}
      </motion.h2>
      <motion.div
        className={`bottomline`}
        animate={inView ? { width: [0, 60] } : {}}
        transition={{ delay: 0.2 }}
      ></motion.div>
      <div className={`container flex`}>
        <motion.div
          className={`content`}
          animate={inView ? { x: [1000, 0], opacity: [0, 1] } : {}}
        >
          <ul>
            <li>
              <i className='fas fa-chevron-right icon'></i>
              Get professional web designs in less time
            </li>
            <li>
              <i className='fas fa-chevron-right icon'></i>
              Your idea our creativity!
            </li>
            <li>
              <i className='fas fa-chevron-right icon'></i>
              We create eye catching desings in affordable prices.
            </li>
            <li>
              <i className='fas fa-chevron-right icon'></i>
              Our colors flow with your thoughts.
            </li>
          </ul>
        </motion.div>
        <motion.div
          className={`image`}
          animate={inView ? { x: [-1000, 0], opacity: [0, 1] } : {}}
        >
          <Image
            // className={styles.image}
            src='/design.png'
            alt='web'
            height='500px'
            width='600px'
            priority={true}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Test;
