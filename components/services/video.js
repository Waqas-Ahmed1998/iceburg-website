import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useInView from 'react-cool-inview';

const Video = function () {
  const { observe, inView, scrollDirection } = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    inView && document.getElementById('video').classList.remove('active');
  }, [inView]);
  return (
    <section ref={observe} id='video' className={`right active`}>
      <motion.h2
        className={`heading`}
        animate={inView ? { x: [10, 1], opacity: [0, 1] } : {}}
      >
        {' '}
        Web development
      </motion.h2>
      <motion.div
        className={`bottomLine`}
        animate={inView ? { width: [0, 60] } : {}}
        transition={{ delay: 0.2 }}
      ></motion.div>
      <div className={`container flex`}>
        <motion.div
          className={`content`}
          animate={inView ? { x: [-1000, 0] } : {}}
        >
          <motion.p animate={inView ? { opacity: [0, 1] } : {}}>
            {' '}
            <i className='fas fa-chevron-right icon'></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aut consequatur nisi
          </motion.p>
          <motion.p animate={inView ? { opacity: [0, 1] } : {}}>
            <i className='fas fa-chevron-right icon'></i> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dignissimos aut consequatur nisi
          </motion.p>
          <motion.p animate={inView ? { opacity: [0, 1] } : {}}>
            <i className='fas fa-chevron-right icon'></i> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dignissimos aut
          </motion.p>
          <motion.p animate={inView ? { opacity: [0, 1] } : {}}>
            <i className='fas fa-chevron-right icon'></i> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dignissimos aut consequatur nisi
          </motion.p>
          <motion.p animate={inView ? { opacity: [0, 1] } : {}}>
            <i className='fas fa-chevron-right icon'></i> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dignissimos aut consequatur nisi
          </motion.p>
        </motion.div>
        <motion.div
          className={`image`}
          animate={inView ? { x: [1000, 0], opacity: [0, 1] } : {}}
        >
          <Image
            src={'/v.png'}
            alt='web'
            height={440}
            width={700}
            priority={true}
          />
        </motion.div>
      </div>
    </section>
  );
};
// <motion.div />
// `${styles.image}`;
export default Video;
