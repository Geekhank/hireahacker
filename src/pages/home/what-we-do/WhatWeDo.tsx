import React from 'react';
import styles from './WhatWeDo.module.css';

const WhatWeDo: React.FC = () => {
  const leftServices = [
    'Assets Management',
    'Email Recovery',
    'Phone Surveillance',
    'Gadgets Protection',
    'Data Recovery',
  ];

  const rightServices = [
    'Email Recovery',
    'Data Recovery',
    'Investment Recovery',
    'Crypto Funds Recovery',
  ];

  return (
    <section className={styles.whatWeDoSection}>
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
            <h1 className={styles.heading}>What We Do</h1>
            <span className={styles.accentLine}></span>
          </div>

          {/* Two column content */}
          <div className={styles.contentGrid}>
            {/* Left Column */}
            <div className={styles.contentColumn}>
              <h2 className={styles.columnHeading}>We are here for you</h2>
              
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
                {leftServices.map((service, index) => (
                  <li key={index} className={styles.serviceItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <p className={styles.paragraph}>
                We have a trained team of seasoned professionals under various
                skillsets when it comes to online hacking services. Our company in
                fact houses a separate group of specialists who are productively
                focussed and established authorities in different platforms. They
                hail from a proven track record and have cracked even the toughest
                of barriers to intrude and capture or recapture all relevant data
                needed by our customers. Sonihac understands your requirements to
                hire a professional hacker and can perceive what actually threatens
                you and risk your business, relationships or even life. We are 100%
                trusted professional hacking company and keep your deal entirely
                confidential. We are aware of the hazards involved. Our team under
                no circumstances disclose information to any third party. The core
                values adhered by our firm is based on trust and faith. Our expert
                hacking online company supports you on time and reply to any query
                related to the unique services we offer. Sonihac is available for
                customer care 24/7, all day and night. We understand that your
                requirement might be urgent so we have a separate team of allocated
                hackers who interact with the customers round the clock. You are
                with the right people so just get started.
              </p>
            </div>

            {/* Right Column */}
            <div className={styles.contentColumn}>
              <h2 className={styles.columnHeading}>
                Recover Lost Funds And Crypto From Fake Binary Options Companies
              </h2>

              <p className={styles.paragraph}>
                The Binary Options and cryptocurrency market has become overloaded
                and kind of confused. With numerous companies locked in an intense
                contest with their business rivals, you have to think outside of the
                box before trading. Those who are the victims from either exchanges
                or wallets being hacked issues need to know how they can recover
                their cryptocurrency in an efficient manner. YES! Times have
                changed. Technology is evolving everyday. There are new innovations
                that do not only trace bitcoin addresses but find out what platform
                or exchange they belong to. Anyone would agree that this is a big
                step in recovering lost funds and bitcoins. What you choose to do
                with this info is entirely up to you.
              </p>

              <p className={styles.paragraph}>
                Data recovery services- Gain back social media power We hack
                facebook, emails, mobiles and anything; you name it, we hack it. Our
                adeptness to hack Facebook Password attributes to many factors.
                First and foremost among them is the years of experience we have in
                this niche. We can hack Facebook password, no matter how strong they
                are. This can really come handy if you have lost your Facebook
                password or somebody else has managed to steal your password thus
                causing you trouble. Our team hack Facebook account back for you
                within a reasonable time. A lot of service providers to hack Email
                Password may pop up in the search results. Are they genuine people
                capable to hack Facebook account or do they simply claim that they
                can hack Facebook password? We have a proven track record and we
                keep on proving our mettle again and again. Entrust you job upon us
                and we will guarantee you best results.
              </p>

              <ul className={styles.servicesList}>
                {rightServices.map((service, index) => (
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

export default WhatWeDo;