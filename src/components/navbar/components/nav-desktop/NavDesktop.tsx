import styles from "./NavDesktop.module.css";
import { Link } from "react-router-dom"; 
import companyLogo from "../../../../assets/images/svg/hireahacker-logo (1).svg";


import NavLinks from "./comps/nav-link-section/NavLink";
import type { INavLink } from "../../../../types";
import PrimaryButton from "../../../buttons/primary-button/PrimaryButton";

// Interfaces
interface IProps {
  allNavLinks: INavLink[] | null;
}

function NavDesktop({ allNavLinks }: IProps) {
  return (
    <section className={styles.navbar__desktop_view_container}>
      {/* Company Logo section / Left Section  */}
      <Link to={"/"} className={styles.company_logo_wrapper}>
        <img src={companyLogo} alt="comtova logo" />
      </Link>

      {/* Nav Link Section / Middle Section */}
      <NavLinks allNavLinks={allNavLinks} />

      {/* Action Button Section / Right Section */}
      <div className={styles.navbar__action_button_section}>
    
        <PrimaryButton
          placeholder="Get a qoute"
          onClick={() => (window.location.href = "/")}
          className={styles.create_account_button_wrapper}
        />
      </div>
    </section>
  );
}

export default NavDesktop;