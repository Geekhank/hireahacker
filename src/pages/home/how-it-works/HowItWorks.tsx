import React from 'react';
import styles from './HowItWorks.module.css';

const HowItWorks: React.FC = () => {
  const recoveryServices = [
    'Investigations',
    'Uncover The Truth',
    'Vulnerability Assessment',
    'Risk Management',
    'Funds Litigation',
    'Recovery',
  ];

  const hackingServices = [
    'Experienced Hackers',
    'We are anonymous',
    'We do care about people\'s problems',
    'We do not provide services to crime',
  ];

  return (
    <section id="how-it-works" className={styles.howItWorksSection}>
      {/* Background effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gridPattern}></div>
        <div className={styles.glowOrb1}></div>
        <div className={styles.glowOrb2}></div>
        <div className={styles.scanlineEffect}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.heading}>How It Works</h1>
            <span className={styles.accentLine}></span>
          </div>

          {/* Two column content */}
          <div className={styles.contentGrid}>
            {/* Left Column - Funds and Data Recovery */}
            <div className={styles.contentColumn}>
              <h2 className={styles.columnHeading}>Funds and Data Recovery</h2>
              
              <p className={styles.paragraph}>
                Are you looking for the best professional hackers online? Your
                search ends right here with us. We are a vibrant squad of dedicated
                online hackers maintaining the highest standards and unparalleled
                professionalism in every aspect. In this online world there is
                nothing that we cannot hack. Having years of experience in serving
                customers with professional hacking services, we have mastered them
                all. We help you to recover the password of your email, Facebook or
                any other accounts. Our team accepts all types of hacking orders and
                deliver assured results to alleviate your agonies and anxieties. Our
                main areas of expertise include but is never confined to:
              </p>

              <ul className={styles.servicesList}>
                {recoveryServices.map((service, index) => (
                  <li key={index} className={styles.serviceItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Hacking Services */}
            <div className={styles.contentColumn}>
              <h2 className={styles.columnHeading}>Hacking Services</h2>

              <p className={styles.paragraph}>
                We are the greatest team of Professional hackers in the world and
                are experienced in dealing with targets, we are anonymous but we do
                care about peoples problems.
              </p>

              {/* Decorative tech image placeholder */}
              <div className={styles.imageContainer}>
                <div className={styles.techImage}>
                  <div className={styles.imageOverlay}>
                    <div className={styles.codeLine}>&gt; system.access()</div>
                    <div className={styles.codeLine}>&gt; authenticate.user()</div>
                    <div className={styles.codeLine}>&gt; decrypt.data()</div>
                    <div className={styles.statusIndicator}>
                      <span className={styles.statusDot}></span>
                      <span>ONLINE</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className={styles.servicesList}>
                {hackingServices.map((service, index) => (
                  <li key={index} className={styles.serviceItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;