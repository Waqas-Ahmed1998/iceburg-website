import styles from './servicesInfo.module.scss';

const ServicesSection = function () {
  return (
    <section id='services' className={styles.servicesInfo}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.heading}>OUR SERVICES</h2>
      </div>
    </section>
  );
};

export default ServicesSection;
