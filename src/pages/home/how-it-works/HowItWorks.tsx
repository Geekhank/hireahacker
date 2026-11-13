import React from "react";
import styles from "./HowItWorks.module.css";

const initialSteps = [
  "Tell us what happened and what outcome you are seeking.",
  "Share only information you are authorized to provide.",
  "Review the proposed scope, limitations, and next steps before work begins.",
];

const deliverySteps = [
  "Review the available information and relevant digital evidence.",
  "Explain findings in clear, understandable language.",
  "Provide practical recommendations based on the evidence and agreed scope.",
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className={styles.howItWorksSection}>
      <div className={styles.backgroundEffects} aria-hidden="true">
        <div className={styles.gridPattern}></div>
        <div className={styles.glowOrb1}></div>
        <div className={styles.glowOrb2}></div>
        <div className={styles.scanlineEffect}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <h2 className={styles.heading}>How It Works</h2>
            <span className={styles.accentLine}></span>
          </div>
          <div className={styles.contentGrid}>
            <div className={styles.contentColumn}>
              <h3 className={styles.columnHeading}>1. Understand the situation</h3>
              <p className={styles.paragraph}>
                Every enquiry starts with a conversation about the issue,
                information available, and the help being requested. We explain
                what may be possible, what is outside our scope, and what
                authorization may be needed.
              </p>
              <ul className={styles.servicesList}>
                {initialSteps.map((step) => (
                  <li key={step} className={styles.serviceItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.contentColumn}>
              <h3 className={styles.columnHeading}>2. Review and report</h3>
              <p className={styles.paragraph}>
                Once the scope is agreed and the required authorization is in
                place, we review the available material and communicate the
                results. Findings depend on the evidence and access lawfully
                available; no recovery or investigation outcome is guaranteed.
              </p>
              <ul className={styles.servicesList}>
                {deliverySteps.map((step) => (
                  <li key={step} className={styles.serviceItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact-us" className={styles.ctaButton}>Discuss your case</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
