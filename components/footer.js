'use strict';
import { useEffect } from 'react';
import styles from '../styles/footer.module.scss';
import { motion } from 'framer-motion';
import useInView from 'react-cool-inview';
import Image from 'next/image';
const Footer = function () {
  const { observe, inView } = useInView({
    threshold: 0.25,
  });
  useEffect(() => {
    inView && document.getElementById('foter').classList.remove('active');
  }, [inView]);
  return (
    <footer ref={observe} id='footer' className={styles.footer}>
      <div id='foter' className={`container active ${styles.grid}`}>
        <motion.div
          className={styles.logoPart}
          animate={inView ? { y: [1000, 0], opacity: [0, 1] } : {}}
        >
          <h1 className={`logo`}>
            {' '}
            <Image
              src={'/ice.png'}
              alt='web'
              height={100}
              width={100}
              quality={100}
              priority={true}
            />
          </h1>
        </motion.div>

        <motion.div animate={inView ? { y: [1000, 0], opacity: [0, 1] } : {}}>
          <p className={styles.highlight}>Industires</p>
          <ul>
            <li>
              <a href=''>web development</a>
            </li>
            <li>
              <a href=''>web design</a>
            </li>
            <li>
              <a href=''>Seo</a>
            </li>
            <li>
              <a href=''>Video Edditing</a>
            </li>
          </ul>
        </motion.div>
        <motion.div animate={inView ? { y: [-1000, 0], opacity: [0, 1] } : {}}>
          <p className={styles.highlight}>Get in Touch</p>
          <ul className={styles.address}>
            <li>
              <i className={`fas fa-envelope fa-2x ${styles.icons} `}></i>
              Email here
            </li>
            <li>
              {' '}
              <i className={`fas fa-phone fa-2x ${styles.icons}`}></i>
              contact Number here
            </li>
            <li>
              {' '}
              <i className={`fas fa-map-marker-alt fa-2x ${styles.icons}`}></i>
              Location here
            </li>
          </ul>
        </motion.div>
      </div>
      <div className='container'>
        <div className={styles.social}>
          <p className={styles.date}>© 2021 website,Inc. All rights reserved</p>
          <div className={styles.socialIcons}>
            <a href=''>
              <i className='fab fa-twitter-square icons'></i>
            </a>
            <a href=''>
              <i className='fab fa-linkedin icons'></i>
            </a>
            <a href=''>
              <i className='fab fa-facebook-square'></i>
            </a>
            <a href=''>
              <i className={`fab fa-instagram `}></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// <motion.div animate={inView ? { y: [-1000, 0], opacity: [0, 1] } : {}}>
// <p className={styles.highlight}>Quick Links</p>
// <ul>
//   <li>
//     <a href=''>facebook</a>
//   </li>
//   <li>
//     <a href=''>twitter</a>
//   </li>
//   <li>
//     <a href=''>instagram</a>
//   </li>
//   <li>
//     <a href=''>instagram</a>
//   </li>
// </ul>
// </motion.div>

export default Footer;
