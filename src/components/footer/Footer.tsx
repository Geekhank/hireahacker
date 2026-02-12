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
            <h3 className={styles.footerHeading}>About hireahacker</h3>
            <p className={styles.footerText}>
              hireahacker is a global cybersecurity and fund recovery service
              provider specializing in cryptocurrency recovery, digital
              forensics, and private investigation. We help victims of online
              fraud reclaim their assets through expert investigation and
              recovery operations. Available 24/7 to serve clients worldwide
              with complete confidentiality.
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
                    <a href={`#${link.path}`} className={styles.footerLink}>
                      <span className={styles.linkIcon}>›</span>
                      {link.name}
                    </a>
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
              <a href="mailto:soniahelps20@gmail.com" className={styles.contactLink}>
                hireahacker@gmail.com
              </a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <a href="tel:+17576788036" className={styles.contactLink}>
                +1 757 678 8036
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
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.874 5.874 0 0 0-2.124 1.388 5.878 5.878 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076.008 8.354-.005 8.764.001 12.023c.007 3.259.021 3.667.083 4.947.061 1.277.264 2.149.563 2.911.308.789.72 1.457 1.388 2.123a5.872 5.872 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552 1.278.056 1.689.069 4.947.063 3.257-.007 3.668-.021 4.947-.082 1.28-.06 2.147-.265 2.91-.563a5.881 5.881 0 0 0 2.123-1.388 5.881 5.881 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912.056-1.28.07-1.69.063-4.948-.006-3.258-.02-3.667-.081-4.947-.06-1.28-.264-2.148-.564-2.911a5.892 5.892 0 0 0-1.387-2.123 5.857 5.857 0 0 0-2.128-1.38C19.074.322 18.202.121 16.924.066 15.647.009 15.236-.006 11.977 0 8.718.008 8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.736 3.736 0 0 1-1.382-.895 3.695 3.695 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228-.06-1.264-.072-1.644-.08-4.848-.006-3.204.006-3.583.061-4.848.05-1.169.246-1.805.408-2.228.216-.561.477-.96.895-1.382a3.705 3.705 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417 1.265-.06 1.644-.072 4.848-.08 3.203-.006 3.583.006 4.85.062 1.168.05 1.804.244 2.227.408.56.216.96.475 1.382.895.421.42.681.817.9 1.378.165.422.362 1.056.417 2.227.06 1.265.074 1.645.08 4.848.005 3.203-.006 3.583-.061 4.848-.051 1.17-.245 1.805-.408 2.23-.216.56-.477.96-.896 1.38a3.705 3.705 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418-1.266.06-1.645.072-4.85.079-3.204.007-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442 1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024 6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16 4 4 0 0 1 8 12.008"/>
              </svg>
            </a>
          </div>

          <div className={styles.copyright}>
            <p>&copy; 2025 hireahacker. All rights reserved. | Licensed Private Investigation Agency</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;