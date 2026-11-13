import React from "react";
import styles from "./WhatWeDo.module.css";

const serviceAreas = [
  "Digital forensics and evidence review",
  "Online fraud and cryptocurrency investigations",
  "Account access and data recovery support",
  "Device security and privacy reviews",
  "Incident documentation and response guidance",
];

const WhatWeDo: React.FC = () => {
  return (
    <section className={styles.whatWeDoSection}>
      <div className={styles.backgroundEffects} aria-hidden="true">
        <div className={styles.gridPattern}></div>
        <div className={styles.glowOrb1}></div>
        <div className={styles.glowOrb2}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <h2 className={styles.heading}>How we help</h2>
            <span className={styles.accentLine}></span>
          </div>
          <div className={styles.contentGrid}>
            <div className={styles.contentColumn}>
              <h3 className={styles.columnHeading}>A considered response to digital problems</h3>
              <p className={styles.paragraph}>
                When an account is compromised, data is lost, or an online
                investment turns out to be fraudulent, knowing what to do next
                can be difficult. We help clients understand the available
                evidence, organize the details of an incident, and identify
                practical next steps.
              </p>
              <p className={styles.paragraph}>
                Every situation is different. We begin by understanding the
                issue and the information available, then explain the scope of
                support that may be appropriate. We do not promise outcomes
                that depend on banks, platforms, exchanges, or other third
                parties.
              </p>
            </div>
            <div className={styles.contentColumn}>
              <h3 className={styles.columnHeading}>Areas of support</h3>
              <ul className={styles.servicesList}>
                {serviceAreas.map((service) => (
                  <li key={service} className={styles.serviceItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.paragraph}>
                Services are provided for legitimate digital investigations,
                account recovery, and authorized cybersecurity work.
              </p>
              <p className={styles.paragraph}>
                Have a specific concern? Share the situation with us and we
                will help clarify whether it falls within our scope.
              </p>
              <a href="#contact-us" className={styles.ctaButton}>Talk to our team</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;