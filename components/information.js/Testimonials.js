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
            Not only skilled but passionate about web design. Willing to go
            above and beyond.Thats how i`d describe my experiences of IceBerg
            Create
          </p>
          <div className='name'>
            <h2>shawn</h2>
          </div>
        </div>
        <div className='card'>
          {' '}
          <i className='fas fa-quote-left fa-2x'></i>
          <p>
            We got our business website by Iceberg Creative. It was very easy
            working with them and they are ready for any kind of customization
            to uplift the look and the appearance of the website.
          </p>
          <div className='name'>
            <h2>Sarah</h2>
          </div>
        </div>
        <div className='card'>
          {' '}
          <i className='fas fa-quote-left fa-2x'></i>
          <p>
            Great customer service. Always helpful and available when need
            assistance. Best SEO and website comapany i have found . Great value
            for the services received.
          </p>
          <div className='name'>
            <h2>lerry</h2>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
