import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './about.module.scss';
import useInView from 'react-cool-inview';

const About = function () {
  const { observe, inView } = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) document.getElementById('about').classList.remove('active');
  }, [inView]);
  return (
    <section ref={observe} className={`${styles.about}`}>
      <div id='about' className={`container active ${styles.flex}`}>
        <motion.div className={styles.content}>
          <motion.h2
            className={styles.heading}
            animate={inView ? { x: [10, 1], opacity: [0, 1] } : {}}
            // transition={{ duration: 1 }}
          >
            About Webname
          </motion.h2>
          <motion.div
            className={styles.bottomLine}
            animate={inView ? { width: [0, 60] } : {}}
            transition={{ delay: 0.2 }}
          ></motion.div>
          <motion.p
            animate={inView ? { opacity: [0, 1] } : {}}
            // transition={{ delay: 0.5 }}
          >
            With over 10 years of experience in the digital world, Iceberg has
            helped businesses ranging from restaurants to professional services
            to technology companies grow their customer base and improve search
            engine rankings.
          </motion.p>
          <motion.p
            animate={inView ? { opacity: [0, 1] } : {}}
            // transition={{ delay: 0.7 }}
          >
            Iceberg Creative is an agency that helps small businesses with their
            marketing.
          </motion.p>
          <motion.p
            animate={inView ? { opacity: [0, 1] } : {}}
            // transition={{ delay: 0.9 }}
          >
            The company also specializes in website development & design, social
            media management, content creation, graphic design, video production
            and more!
          </motion.p>
        </motion.div>
        <div className={styles.sideContent}>
          <motion.div
            className={styles.sideContentGrid}
            animate={inView ? { scale: [0, 1], skewX: [0, 0] } : {}}
          >
            <div className={styles.card}>
              <motion.p
                animate={inView ? { rotate: [360, 0] } : {}}
                transition={{ duration: 1 }}
              >
                <i className={`fas fa-lightbulb fa-2x ${styles.icons}`}></i>
              </motion.p>
              <h3>Innovative Ideas</h3>
            </div>

            <div className={styles.card}>
              <motion.p
                animate={inView ? { rotate: [360, 0] } : {}}
                transition={{ duration: 1 }}
              >
                {' '}
                <i className={`fas fa-handshake fa-2x ${styles.icons} `}></i>
              </motion.p>

              <h3>24 / 7 Support</h3>
            </div>

            <div className={styles.card}>
              <motion.p
                animate={inView ? { rotate: [360, 0] } : {}}
                transition={{ duration: 1 }}
              >
                <i className={`fas fa-headset fa-2x ${styles.icons} `}></i>
              </motion.p>
              <h3>Communication</h3>
            </div>

            <div className={styles.card}>
              <motion.p
                animate={inView ? { rotate: [360, 0] } : {}}
                transition={{ duration: 1 }}
              >
                <i className={`fas fa-calendar-alt fa-2x ${styles.icons} `}></i>
              </motion.p>
              <h3>Planning</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
