import { useEffect, useState } from "react";
import styles from "./NavMobile.module.css";
import { Link, useLocation } from "react-router-dom";
import companyLogo from "../../../../assets/images/svg/hireahacker-logo (1).svg";
import navburgerIcon from "../../../../assets/images/svg/navburger-icon.svg";
import navcloseIcon from "../../../../assets/images/svg/navclose-icon.svg";

import NavLinks from "./nav-links-section/NavLinks";
import type { INavLink } from "../../../../types";
import PrimaryButton from "../../../buttons/primary-button/PrimaryButton";

interface IProps {
  allNavLinks: INavLink[] | null;
}

function NavMobile({ allNavLinks }: IProps) {
  const location = useLocation();
  const [isMobileNavModalVisible, setIsMobileNavModalVisible] = useState(false);

  const handleToggleMobileNavVisibility = function () {
    setIsMobileNavModalVisible(!isMobileNavModalVisible);
  };

  // Close modal when location changes, but only if it's open
  useEffect(() => {
    if (isMobileNavModalVisible) {
      setIsMobileNavModalVisible(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); // Only depend on pathname, not the whole location object

  return (
    <div className={styles.MOBILE_navbar_container__inner}>
      {/* Company Logo section / Left Section  */}
      <Link to={"/"}>
        <img
          className={styles.mobile__company_logo_img}
          src={companyLogo}
          alt=""
        />
      </Link>

      {/* Navburger Container */}
      <div className="nav-burger-container">
        <button
          onClick={handleToggleMobileNavVisibility}
          className="image-wrapper"
        >
          <img src={navburgerIcon} alt="" />
        </button>
      </div>

      {/* Dropdown Navbar Container */}
      {isMobileNavModalVisible && (
        <div className={styles.mobile_navbar_modal_container}>
          {/* Navclose Container */}
          <div className={styles.nav_close_container}>
            {/* Company Logo section / Left Section  */}
            <Link to={"/"}>
              <img
                className={styles.mobile__company_logo_img}
                src={companyLogo}
                alt=""
              />
            </Link>

            <button
              onClick={handleToggleMobileNavVisibility}
              className="image-wrapper"
            >
              <img src={navcloseIcon} alt="" />
            </button>
          </div>

          <div className={styles.mobile_nav_links_container}>
            {/* Nav Links Section */}
            <NavLinks allNavLinks={allNavLinks} />

            {/* create account */}
            <PrimaryButton
              placeholder="Get a qoute"
              onClick={() => (window.location.href = "/")}
              className={styles.waitlist_button_wrapper}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavMobile;