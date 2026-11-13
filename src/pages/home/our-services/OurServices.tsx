import React from "react";
import styles from "./OurServices.module.css";

const services = [
  {
    icon: "⌕",
    title: "Digital Forensics",
    description: "Structured review of digital information and available evidence to help clarify incidents and support informed next steps.",
  },
  {
    icon: "↗",
    title: "Online Fraud Investigation",
    description: "Research and documentation support for suspected online scams, impersonation, and fraudulent activity.",
  },
  {
    icon: "◎",
    title: "Cryptocurrency Tracing",
    description: "Transaction and wallet-activity analysis to help clients understand the movement of digital assets. Tracing does not guarantee recovery.",
  },
  {
    icon: "⌘",
    title: "Account Recovery Support",
    description: "Guidance for regaining access to accounts you own or are authorized to manage, with a focus on securing them afterward.",
  },
  {
    icon: "▣",
    title: "Data Recovery",
    description: "Assessment and recovery support for lost, inaccessible, or damaged digital files and information.",
  },
  {
    icon: "◇",
    title: "Device Security Review",
    description: "Practical review of device security and privacy settings to help identify potential risks and improve protection.",
  },
];

const OurServices: React.FC = () => {
  return (
    <section id="services" className={styles.ourServicesSection}>
      <div className={styles.backgroundEffects} aria-hidden="true">
        <div className={styles.gridPattern}></div>
        <div className={styles.glowOrb1}></div>
        <div className={styles.glowOrb2}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <h2 className={styles.heading}>Our Services</h2>
            <span className={styles.accentLine}></span>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <div className={styles.iconContainer}>
                  <span className={styles.icon} aria-hidden="true">{service.icon}</span>
                  <div className={styles.iconGlow}></div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
                <div className={styles.cardBorder}></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;