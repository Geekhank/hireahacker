import { Link } from "react-router-dom"; 
import styles from "../../nav-mobile/nav-links-section/NavLinks.module.css";
import type { INavLink } from "../../../../../types";



interface IProps {
  allNavLinks: INavLink[] | null;
}

function NavLinks({ allNavLinks }: IProps) {
  // Function to handle smooth scrolling to a section
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Render all navigation links */}
      {allNavLinks?.map((navLinkObj) => (
        <div
          key={navLinkObj.id}
          className={`${styles.mobile_nav_link_wrapper}`}
          onClick={() => {
            if (navLinkObj.type === "section") {
              handleScrollToSection(navLinkObj.path); 
            }
          }}
        >
          {navLinkObj.type === "section" ? (
            <a className={styles.alink} href={`#${navLinkObj.path}`}>{navLinkObj.name}</a>
          ) : (
            <Link to={navLinkObj.path} className={styles.button}>
              {navLinkObj.name}
            </Link>
          )}
        </div>
      ))}
    </>
  );
}

export default NavLinks;