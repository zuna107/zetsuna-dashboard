import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.waves}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
        <div className={`${styles.wave} ${styles.wave4}`}></div>
      </div>
      <ul className={styles.socialIcon}>
    <li className={styles.socialIconItem}>
      <a className={styles.socialIconLink} href="https://discord.com/users/948093919835590666" target="_blank" rel="noopener noreferrer">
        <img src={getImageUrl("contact/discord.png")} alt="discord icon" />
      </a>
    </li>
    <li className={styles.socialIconItem}>
      <a className={styles.socialIconLink} href="https://www.hoyolab.com/accountCenter/postList?id=107593323" target="_blank" rel="noopener noreferrer">
        <img src={getImageUrl("contact/hoyolab.png")} alt="hoyolab icon" />
      </a>
    </li>
    <li className={styles.socialIconItem}>
      <a className={styles.socialIconLink} href="https://github.com/zuna107" target="_blank" rel="noopener noreferrer">
        <img src={getImageUrl("contact/github.png")} alt="github icon" />
      </a>
    </li>
      </ul>
      <ul className={styles.menu}>
        <li className={styles.menuItem}><a className={styles.menuLink} href="/">Home</a></li>
        <li className={styles.menuItem}><a className={styles.menuLink} href="#about">About</a></li>
        <li className={styles.menuItem}><a className={styles.menuLink} href="#experience">Find</a></li>
        <li className={styles.menuItem}><a className={styles.menuLink} href="#projects">Message</a></li>
        <li className={styles.menuItem}><a className={styles.menuLink} href="#contact">Contact</a></li>
      </ul>
    </footer>
  );
};
