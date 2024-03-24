/* Navbar.jsx */
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Home
      </a>
      <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
        <ul className={styles.menuItems}>
          <li><a href="#about" onClick={closeMenu}>You're watching me</a></li>
          <li><a href="#experience" onClick={closeMenu}>Find me</a></li>
          <li><a href="#projects" onClick={closeMenu}>Send me a message</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
      <div className={styles.menuBtnWrapper}>
        <img
          className={styles.menuBtn}
          src={getImageUrl(menuOpen ? "nav/Untitled-s1.png" : "nav/Untitled-1.png")}
          alt="menu-button"
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};
