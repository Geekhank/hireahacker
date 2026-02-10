import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  const features = [
    {
      icon: '📋',
      title: 'Top Priority',
      description: 'We consider our clients our Top Priority.',
    },
    {
      icon: '🔐',
      title: '100% TRUSTED',
      description: 'Our Professional Consultation and Recovery Company is Aware of the Fact.',
    },
    {
      icon: '📡',
      title: '24/7 SUPPORT TEAM',
      description: 'We Are Available With Our Hacking and Recovery Services Online 24/7.',
    },
    {
      icon: '🛡️',
      title: 'PROFESSIONAL SERVICES',
      description: 'COMPREHENSIVE PROFESSIONAL SERVICES - A Band of Freelance Hackers.',
    },
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      {/* Background effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.glowEffect1}></div>
        <div className={styles.glowEffect2}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left column - Main content */}
          <div className={styles.mainContent}>
            <div className={styles.header}>
              <h1 className={styles.heading}>About Us</h1>
              <span className={styles.accentLine}></span>
            </div>

            <div className={styles.textContent}>
              <p>
                hireahacker is a global service provider based in the United States.
                We are a registered and licensed private investigation agency
                committed to assisting victims of cryptocurrency and trading
                platform scams through thorough investigation and disruption
                operations.
              </p>
              <p>
                Our core expertise lies in recovering funds lost to internet
                fraud, including scams involving Binary Options, Romance schemes,
                Email fraud, and other online deceptions. We specialize in
                retrieving stolen Bitcoin and other cryptocurrencies such as
                Litecoin, Ethereum, and CFDs.
              </p>
              <p>
                In addition to fund recovery, Sonihac provides services in email
                recovery, phone surveillance, gadget protection, and data
                recovery—ensuring that individuals and organizations are protected
                from digital threats and can regain access to compromised or lost
                assets and information.
              </p>
              <p>
                At Sonihac, our mission is to empower and protect our clients
                through expert recovery, advanced digital investigation, and
                tailored security solutions.
              </p>
            </div>

            <a href="/contact" className={styles.ctaButton}>
              Contact Us
            </a>
          </div>

          {/* Right column - Feature cards */}
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h5 className={styles.featureTitle}>{feature.title}</h5>
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