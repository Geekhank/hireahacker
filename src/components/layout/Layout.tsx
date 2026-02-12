import React, { useEffect } from "react";
import styles from "./Layout.module.css";

import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";




// Interfaces
interface IProps {
  children: React.ReactNode;
}
function Layout({ children }: IProps) {
  // Functions, States and Variables
  const location = useLocation();
  const { hash } = location;

  // UseEffects
  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    //  Scroll to the element with the id in the hash
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className={styles["app-container"]}>

      {/* Navbar */}
      <Navbar />
      <div className={styles["app-container--inner"]}>{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
