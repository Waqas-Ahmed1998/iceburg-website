import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useInView from 'react-cool-inview';

const Seo = function () {
  const { observe, inView, scrollDirection } = useInView({
    threshold: 0.25,
  });
  useEffect(() => {
    inView && document.getElementById('marketing').classList.remove('active');
  }, [inView]);
  return (
    <section ref={observe} id='marketing' className={`left active`}>
      <motion.h2
        className={`heading`}
        animate={inView ? { x: [10, 1], opacity: [0, 1] } : {}}
      >
        {' '}
        SEO SERVICE{' '}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              incidunt corrupti omnis voluptatum
            </li>
            <li>
              <i className='fas fa-chevron-right icon'></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              incidunt corrupti omnis voluptatum
            </li>
            <li>
              <i className='fas fa-chevron-right icon'></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              incidunt corrupti omnis voluptatum
            </li>
            <li>
              <i className='fas fa-chevron-right icon'></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              incidunt corrupti omnis voluptatum
            </li>
            <li>
              <i className='fas fa-chevron-right icon'></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              incidunt corrupti omnis voluptatum
            </li>
          </ul>
        </motion.div>
        <motion.div
          className={`image`}
          animate={inView ? { x: [-1000, 0], opacity: [0, 1] } : {}}
        >
          <Image
            // className={styles.image}
            src='/seo.png'
            alt='web'
            height='450px'
            width='600px'
            priority={true}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Seo;
