import type { INavLink } from "../../../../../../types";
import styles from "./NavLink.module.css";
import { NavLink, useLocation } from "react-router-dom";

interface IProps {
  allNavLinks: INavLink[] | null;
}

function NavLinks({ allNavLinks }: IProps) {
  const location = useLocation();

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Get navbar height to offset the scroll
      const navbarHeight = 88; // 8.8rem = 88px (adjust if your navbar height is different)
      const sectionPosition = section.getBoundingClientRect().top;
      const offsetPosition = sectionPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Update URL with hash
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  const isSectionActive = (path: string) => {
    return location.hash === `#${path}`;
  };

  return (
    <div className={styles.top_nav_link_section}>
      {allNavLinks?.map((navLinkObj, index) => (
        <div key={index + 1} className={styles.nav_link_container}>
          {navLinkObj.type === "section" ? (
            <a
              href={`#${navLinkObj.path}`}
              className={`${styles.nav_link} ${
                isSectionActive(navLinkObj.path) ? styles.active_nav_link : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(navLinkObj.path);
              }}
            >
              {navLinkObj.name}
            </a>
          ) : (
            <NavLink
              to={navLinkObj.path}
              className={({ isActive }) =>
                `${styles.nav_link} ${isActive ? styles.active_nav_link : ""}`
              }
              end
            >
              {navLinkObj.name}
            </NavLink>
          )}
        </div>
      ))}
    </div>
  );
}

export default NavLinks;