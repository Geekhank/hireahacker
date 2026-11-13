import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { NavigationLinks } from "../../constants/NavigationLinks";

function Footer() {
  return (
    <section className={styles.footerSection}>
      {/* Background effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gridPattern}></div>
        <div className={styles.glowOrb}></div>
      </div>

      <div className={styles.footerInner}>
        <hr className={styles.hrline} />
        
        <div className={styles.footerTopSection}>
          {/* About Section */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>About hiregeekhacker</h3>
            <p className={styles.footerText}>
              Hiregeekhacker provides digital investigation and cybersecurity
              support, including digital forensics, online fraud research,
              cryptocurrency tracing, data recovery, and device security
              guidance. Each enquiry is reviewed to clarify the available
              information, appropriate scope, and practical next steps.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <div className={styles.linksList}>
              {NavigationLinks.map((link) => (
                <div key={link.id} className={styles.linkItem}>
                  {link.type === "route" ? (
                    <Link to={link.path} className={styles.footerLink}>
                      <span className={styles.linkIcon}>›</span>
                      {link.name}
                    </Link>
                  ) : (
                    <Link to={`/#${link.path}`} className={styles.footerLink}>
                      <span className={styles.linkIcon}>›</span>
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Contact Us</h3>
            
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <a href="mailto:geekhankhacker@gmail.com" className={styles.contactLink}>
                GEEKHANKHACKER@GMAIL.COM
              </a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>💬</span>
              <a href="https://wa.me/14126284979" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                +1 (412) 628-4979
              </a>
            </div>

            <div className={styles.legalLinks}>
              <Link to="/privacy-policy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className={styles.legalLink}>
                Terms and Conditions
              </Link>
              <Link to="/delete-data" className={styles.legalLink}>
                Delete Data
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className={styles.footerBottom}>
          <div className={styles.socialLinks}>
            <a
              href="https://t.me/Geekhankhacker"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Telegram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.84 8.673c-.139.623-.5.776-.998.484l-2.766-2.039-1.332 1.282c-.148.148-.272.272-.558.272l.198-2.816 5.122-4.627c.222-.198-.048-.308-.346-.11L8.862 13.68l-2.754-.862c-.598-.187-.61-.598.125-.888l10.764-4.145c.498-.187.935.11.774.888z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/14126284979"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Whatsapp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2c2.3 1.3 4.9 2 7.7 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5c-2.5 0-5-.7-7.1-2l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.3-2.2-2-4.6-2-7.1C2.5 8.5 8.5 2.5 16 2.5S29.5 8.5 29.5 16 23.5 28.9 16 28.9zm7.7-10.7c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.6-.2-.8.2s-1 1.2-1.2 1.4c-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2s1.3 3.7 1.5 4c.2.3 2.6 4 6.3 5.6.9.4 1.6.6 2.2.8.9.3 1.8.3 2.4.2.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z"/>
              </svg>
            </a>

          </div>

          <div className={styles.copyright}>
            <p>&copy; 2026 Hiregeekhacker. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;