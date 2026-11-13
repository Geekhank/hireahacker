import React from "react";
import styles from "./About.module.css";

const features = [
  { icon: "◎", title: "Client-focused", description: "A clear understanding of each client's situation and priorities." },
  { icon: "◇", title: "Privacy-conscious", description: "Careful handling of sensitive information throughout an engagement." },
  { icon: "⌁", title: "Evidence-led", description: "Practical analysis grounded in the information available." },
  { icon: "↗", title: "Clear communication", description: "Straightforward explanations of scope, process, and limitations." },
];

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.backgroundEffects} aria-hidden="true">
        <div className={styles.gridOverlay}></div>
        <div className={styles.glowEffect1}></div>
        <div className={styles.glowEffect2}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <div className={styles.header}>
              <h2 className={styles.heading}>About Hiregeekhacker</h2>
              <span className={styles.accentLine}></span>
            </div>
            <div className={styles.textContent}>
              <p>
                Hiregeekhacker provides digital investigation and cybersecurity
                support for people and organizations dealing with online fraud,
                compromised information, and other digital concerns.
              </p>
              <p>
                Our areas of focus include digital forensics, online fraud
                research, cryptocurrency transaction tracing, data recovery,
                and practical account and device security guidance.
              </p>
              <p>
                We believe clients deserve a clear explanation of what can be
                investigated, what evidence is needed, and what limitations may
                apply. Any work involving an account, device, or system must be
                properly authorized.
              </p>
              <p>
                We aim to approach every enquiry with discretion, realistic
                expectations, and a focus on useful next steps.
              </p>
            </div>
            <a href="#contact-us" className={styles.ctaButton}>Contact our team</a>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <div className={styles.cardGlow}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;