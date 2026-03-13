import React from 'react';
import styles from './RowSectionOne.module.css';

const RowSectionOne: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Animated background layers */}
      <div className={styles.backgroundLayer}>
        <div className={styles.gridPattern}></div>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
        <div className={styles.scanline}></div>
      </div>

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>Hiregeekhacker</h2>
            <span className={styles.subheading}>
              Consultants and Funds Recovery Experts
            </span>
          </div>
          <a href="#contact-us" className={styles.ctaButton}>
            File A Complaint
          </a>
        </div>
      </div>
    </section>
  );
};

export default RowSectionOne;