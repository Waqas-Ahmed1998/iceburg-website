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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
            molestias vel debitis expedita asperiores quidem id ea vitae autem
            ducimus aliquid laudantium optio exercitationem consectetur
            reprehenderit, in ratione itaque.
          </motion.p>
          <motion.p
            animate={inView ? { opacity: [0, 1] } : {}}
            // transition={{ delay: 0.7 }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
            cumque? Quasi doloremque ea laborum dolorum, libero unde pariatur!
            Eligendi, omnis.
          </motion.p>
          <motion.p
            animate={inView ? { opacity: [0, 1] } : {}}
            // transition={{ delay: 0.9 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quos
            reprehenderit assumenda fuga et, ea velit inventore aliquam
            similique esse!
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
