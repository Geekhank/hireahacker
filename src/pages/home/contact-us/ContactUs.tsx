import React, { useState } from 'react';
import styles from './ContactUs.module.css';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={styles.contactSection}>
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
            <div className={styles.titleWrapper}>
              <h1 className={styles.heading}>Contact Us</h1>
              <span className={styles.accentLine}></span>
            </div>
            <p className={styles.subheading}>
              Let us know how we can help. Our friendly customer service team will
              serve you as quickly as possible. We are at your beck and call.
            </p>
          </div>

          {/* Content Grid */}
          <div className={styles.contentGrid}>
            {/* Left Column - Contact Info */}
            <div className={styles.contactInfoGrid}>
              {/* Email Card */}
              <div className={styles.contactCard}>
                <div className={styles.iconCircle}>
                  <span className={styles.icon}>✉️</span>
                </div>
                <h4 className={styles.contactTitle}>Email Us</h4>
                <a 
                  href="mailto:soniahelps20@gmail.com" 
                  className={styles.contactLink}
                >
                  soniahelps20@gmail.com
                </a>
                <div className={styles.cardGlow}></div>
              </div>

              {/* Phone Card */}
              <div className={styles.contactCard}>
                <div className={styles.iconCircle}>
                  <span className={styles.icon}>📞</span>
                </div>
                <h4 className={styles.contactTitle}>Call Us</h4>
                <a 
                  href="tel:+17576788036" 
                  className={styles.contactLink}
                >
                  +1 757 678 8036
                </a>
                <div className={styles.cardGlow}></div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <form 
              action="https://formspree.io/f/xldnkybe" 
              method="POST"
              className={styles.contactForm}
            >
              <div className={styles.fieldWrapper}>
                <label htmlFor="full_name" className={styles.formLabel}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  className={styles.formControl}
                  name="full_name"
                  id="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.fieldWrapper}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  className={styles.formControl}
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.fieldWrapper}>
                <label htmlFor="message" className={styles.formLabel}>
                  Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  className={styles.formControl}
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                <span>Let Us Work Together</span>
                <span className={styles.buttonShine}></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;