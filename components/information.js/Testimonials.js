import { useEffect } from 'react';

import useInView from 'react-cool-inview';
import { motion } from 'framer-motion';
const Testimonials = function () {
  const { observe, inView, scrollDirection } = useInView({
    threshold: 0.25,
  });
  useEffect(() => {
    inView && document.getElementById('container').classList.remove('active');
    inView && document.getElementById('topContent').classList.remove('active');
  }, [inView]);
  return (
    <section ref={observe} id='testimonials' className='testimonials'>
      <div id='topContent' className='topContent active'>
        <motion.h2
          className='heading'
          animate={inView ? { x: [10, 1], opacity: [0, 1] } : {}}
        >
          Testmonials
        </motion.h2>
        <motion.div
          className='bottomLine'
          animate={inView ? { width: [0, 60] } : {}}
          transition={{ delay: 0.2 }}
        ></motion.div>
        <motion.p animate={inView ? { opacity: [0, 1] } : {}}>
          See what our clients are saying about us
        </motion.p>
      </div>
      <motion.div
        id='container'
        className='container flex active'
        animate={inView ? { scale: [0, 1] } : {}}
      >
        <div className='card'>
          <i className='fas fa-quote-left fa-2x'></i>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            ratione reprehenderit repellat libero eveniet sequi voluptates rem
            nihil a temporibus.
          </p>
          <div className='name'>
            <h2>Haris</h2>
            <p>Founder</p>
          </div>
        </div>
        <div className='card'>
          {' '}
          <i className='fas fa-quote-left fa-2x'></i>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            ratione reprehenderit repellat libero eveniet sequi voluptates rem
            nihil a temporibus.
          </p>
          <div className='name'>
            <h2>Jansher</h2>
            <p>CEO</p>
          </div>
        </div>
        <div className='card'>
          {' '}
          <i className='fas fa-quote-left fa-2x'></i>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            ratione reprehenderit repellat libero eveniet sequi voluptates rem
            nihil a temporibus.
          </p>
          <div className='name'>
            <h2>Waqas</h2>
            <p>CO Founder</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
