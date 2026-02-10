import styles from "./Navbar.module.css";

import NavDesktop from "./components/nav-desktop/NavDesktop";
import NavMobile from "./components/nav-mobile/NavMobile";
import { NavigationLinks } from "../../constants/NavigationLinks";

function Navbar() {
  return (
    <nav className={styles.navbar_container}>
      <NavDesktop allNavLinks={NavigationLinks} />
      <NavMobile allNavLinks={NavigationLinks} />
    </nav>
  );
}

export default Navbar;
