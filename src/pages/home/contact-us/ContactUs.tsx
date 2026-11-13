import React, { useState } from 'react';
import styles from './ContactUs.module.css';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({ full_name: '', contact: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-us" className={styles.contactSection}>
      <div className={styles.backgroundEffects}>
        <div className={styles.gridPattern}></div>
        <div className={styles.glowOrb1}></div>
        <div className={styles.glowOrb2}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.heading}>Need help with a digital investigation?</h2>
              <span className={styles.accentLine}></span>
            </div>
            <p className={styles.subheading}>Contact our team for an initial discussion. Tell us a little about the issue and the service you need.</p>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.contactInfoGrid}>
              <div className={styles.contactCard}>
                <div className={styles.iconCircle}><span className={styles.icon}>✉️</span></div>
                <h3 className={styles.contactTitle}>Email Us</h3>
                <a href="mailto:geekhankhacker@gmail.com" className={styles.contactLink}>GEEKHANKHACKER@GMAIL.COM</a>
                <div className={styles.cardGlow}></div>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.iconCircle}><span className={styles.icon}>💬</span></div>
                <h3 className={styles.contactTitle}>WhatsApp Us</h3>
                <a href="https://wa.me/14126284979" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>+1 (412) 628-4979</a>
                <div className={styles.cardGlow}></div>
              </div>
            </div>

            <form action="https://formspree.io/f/mykdkzay" method="POST" className={styles.contactForm}>
              <div className={styles.fieldWrapper}>
                <label htmlFor="full_name" className={styles.formLabel}>Name <span className={styles.required}>*</span></label>
                <input type="text" className={styles.formControl} name="full_name" id="full_name" value={formData.full_name} onChange={handleChange} autoComplete="name" required />
              </div>
              <div className={styles.fieldWrapper}>
                <label htmlFor="contact" className={styles.formLabel}>Email or WhatsApp <span className={styles.required}>*</span></label>
                <input type="text" className={styles.formControl} name="contact" id="contact" value={formData.contact} onChange={handleChange} placeholder="Your email address or WhatsApp number" required />
              </div>
              <div className={styles.fieldWrapper}>
                <label htmlFor="service" className={styles.formLabel}>Service needed <span className={styles.required}>*</span></label>
                <select className={styles.formControl} name="service" id="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Choose a service</option>
                  <option value="Digital forensics">Digital forensics</option>
                  <option value="Online fraud investigation">Online fraud investigation</option>
                  <option value="Cryptocurrency tracing">Cryptocurrency tracing</option>
                  <option value="Account recovery support">Account recovery support</option>
                  <option value="Data recovery">Data recovery</option>
                  <option value="Device security">Device security</option>
                  <option value="Consensual phone monitoring">Consensual phone monitoring</option>
                  <option value="Cheating spouse investigation support">Cheating spouse investigation support</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.fieldWrapper}>
                <label htmlFor="message" className={styles.formLabel}>Brief description of the issue <span className={styles.required}>*</span></label>
                <textarea className={styles.formControl} name="message" id="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Briefly explain what happened and what help you are looking for. Do not include passwords or sensitive account details." required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}><span>Send enquiry</span><span className={styles.buttonShine}></span></button>
              <p className={styles.formNote}>Please do not submit passwords, verification codes, or other sensitive account information.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
