import React from 'react';
import styles from './OurServices.module.css';

const OurServices: React.FC = () => {
  const services = [
    {
      icon: '💼',
      title: 'Asset Wealth Management',
      description: 'Our investment advisory service combines other financial services to address management of your wealth against fraud',
    },
    {
      icon: '📧',
      title: 'Email Recovery',
      description: 'We help you regain access to compromised or lost email accounts, securing your data and restoring your digital identity with minimal disruption.',
    },
    {
      icon: '📱',
      title: 'Phone Surveillance',
      description: 'Monitor and secure your mobile devices with advanced surveillance solutions that help detect unauthorized access and ensure your privacy is protected.',
    },
    {
      icon: '🛡️',
      title: 'Gadgets Protection',
      description: 'Safeguard your digital devices against theft, damage, and unauthorized access through comprehensive protection plans tailored to your lifestyle.',
    },
    {
      icon: '💾',
      title: 'Data Recovery',
      description: 'Recover lost or corrupted files from damaged or formatted devices using cutting-edge data recovery tools and expertise in digital forensics.',
    },
    {
      icon: '₿',
      title: 'Investment and Crypto Currency Recovery',
      description: 'Track and recover lost or stolen digital assets and investments, including cryptocurrencies, through our specialized fraud investigation and recovery services.',
    },
  ];

  return (
    <section id="services" className={styles.ourServicesSection}>
      {/* Background effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gridPattern}></div>
        <div className={styles.glowOrb1}></div>
        <div className={styles.glowOrb2}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.heading}>Our Services</h1>
            <span className={styles.accentLine}></span>
          </div>

          {/* Services Grid */}
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className={styles.serviceCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.iconContainer}>
                  <span className={styles.icon}>{service.icon}</span>
                  <div className={styles.iconGlow}></div>
                </div>
                <div className={styles.cardContent}>
                  <h5 className={styles.serviceTitle}>{service.title}</h5>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
                <div className={styles.cardBorder}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;