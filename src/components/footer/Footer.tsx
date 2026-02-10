import { Link } from "react-router-dom"; // ✅ Import Link
import styles from "./Footer.module.css";
import mailIcon from "../../assets/images/svg/mail-icon.svg";
import phoneIcon from "../../assets/images/svg/phone-icon.svg";
import twitterIcon from "../../assets/images/svg/twitter-icon.svg";
import facebookIcon from "../../assets/images/svg/facebook-icon.svg";
import instagramIcon from "../../assets/images/svg/instagram-icon.svg";
import { NavigationLinks } from "../../constants/NavigationLinks";

function Footer() {
  return (
    <section className={`home__row_section ${styles.footer_section}`}>
      <div className={`app__row_container ${styles.footer_section_inner}`}>
        <hr className={styles.hrline} />
        <div className={styles.footer_top_section}>
          <div className={styles.footer_top_section_container}>
            <h3>About Comtrova</h3>
            <p>
              This is a modern estate management solution designed to simplify
              operations for residential estates. From managing guest access,
              utility payments, and emergency alerts to enabling communication
              between residents and admins — everything is centralized in one
              secure, user-friendly platform.
            </p>
          </div>

          <div className={styles.footer_top_section_container}>
            <h3>Quick Links</h3>
            {NavigationLinks.map((link) => (
              <p key={link.id}>
                {link.type === "route" ? (
                  <Link to={link.path}>{link.name}</Link>
                ) : (
                  <a href={`#${link.path}`}>{link.name}</a>
                )}
              </p>
            ))}
          </div>

          <div className={styles.footer_top_section_container}>
            <h3>Contact us</h3>
            <div className={styles.contact_item}>
              <img src={mailIcon} alt="Mail" />{" "}
              <span>info@comtrovaadmin.com</span>
            </div>
            <div className={styles.contact_item}>
              <img src={phoneIcon} alt="Phone" />{" "}
              <span>+234808712812</span>
            </div>

           
            <div className={styles.contact_item}>
              <Link to="/privacy-policy" className={styles.footer_link}>
                <span>Privacy Policy</span>
              </Link>
            </div>
            <div className={styles.contact_item}>
              <Link to="/terms-and-conditions" className={styles.footer_link}>
                <span>Terms and Conditions</span>
              </Link>
            </div>
            <div className={styles.contact_item}>
              <Link to="/delete-data" className={styles.footer_link}>
                <span>Delete data</span>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.footer_bottom_section}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
