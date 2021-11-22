import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useInView from 'react-cool-inview';

const Web = function () {
  const { observe, inView, scrollDirection } = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    inView &&
      document.getElementById('web-services').classList.remove('active');
  }, [inView]);
  return (
    <section ref={observe} id='web-services' className={`right active`}>
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
      ></motion.div>
      <div className={`container flex`}>
        <motion.div
          className={`content`}
          animate={inView ? { x: [-1000, 0] } : {}}
        >
          <motion.p animate={inView ? { opacity: [0, 1] } : {}}>
            {' '}
            <i className='fas fa-chevron-right icon'></i>
            Increase conversion rates with user-friendly design
          </motion.p>
          <motion.p animate={inView ? { opacity: [0, 1] } : {}}>
            <i className='fas fa-chevron-right icon'></i> Make your company
            stand out in the digital world
          </motion.p>
          <motion.p animate={inView ? { opacity: [0, 1] } : {}}>
            <i className='fas fa-chevron-right icon'></i>Create a unique,
            professional site for your business
          </motion.p>
          <motion.p animate={inView ? { opacity: [0, 1] } : {}}>
            <i className='fas fa-chevron-right icon'></i>Get more traffic and
            sales with custom web development
          </motion.p>
        </motion.div>
        <motion.div
          className={`image`}
          animate={inView ? { x: [1000, 0], opacity: [0, 1] } : {}}
        >
          <Image
            src={'/web.png'}
            alt='web'
            height={440}
            width={600}
            priority={true}
          />
        </motion.div>
      </div>
    </section>
  );
};
// <FontAwesomeIcon icon={faChevronRight} className={`icon`} />
// <motion.div />
// `${styles.image}`;
export default Web;
