import React from "react";
import styles from "./RowSectionOne.module.css";

const RowSectionOne: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundLayer} aria-hidden="true">
        <div className={styles.gridPattern}></div>
        <div className={styles.glowOrb1}></div>
        <div className={styles.glowOrb2}></div>
        <div className={styles.heroVisual}>
          <div className={styles.visualRing}></div>
          <div className={styles.visualCore}>
            <span className={styles.coreShield}>⌑</span>
          </div>
          <span className={styles.visualLabel}>DIGITAL SECURITY</span>
          <span className={styles.visualNode}>01 / ANALYZE</span>
          <span className={styles.visualNode}>02 / INVESTIGATE</span>
          <span className={styles.visualNode}>03 / RESPOND</span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.statusDot}></span>
            CYBERSECURITY • DIGITAL INVESTIGATIONS
          </div>
          <h1 className={styles.heading}>
            Clarity in a <span>complex digital world.</span>
          </h1>
          <p className={styles.subheading}>
            Digital investigation, cybersecurity support, and recovery guidance
            for individuals and organizations facing online threats and fraud.
          </p>
          <p className={styles.contactPrompt}>Need help with a digital investigation? Contact our team for an initial discussion.</p>
          <div className={styles.actions}>
            <a href="#contact-us" className={styles.ctaButton}>Contact our team <span aria-hidden="true">→</span></a>
            <a href="#services" className={styles.secondaryButton}>Explore services</a>
          </div>
          <p className={styles.trustNote}>Private conversations. Clear scope. Authorized work.</p>
        </div>
      </div>
    </section>
  );
};

export default RowSectionOne;