import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>You're watching me?</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/102327881_p0.png")}
          alt="raiden FBI"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <a href="https://discord.gg/e9GBZhad3Z" className={styles.aboutItemLink} target="_blank" rel="noopener noreferrer">
              <img src={getImageUrl("about/Clyde2023.png")} alt="clyde icon" className={styles.aboutItemImage} />
              <div className={styles.aboutItemText}>
                <h3>Bot Assistant</h3>
                <p>
                Mimo# is a Discord bot created to moderate servers using AutoMOD.
                </p>
              </div>
            </a>
          </li>
          <li className={styles.aboutItem}>
            <a href="https://www.hoyolab.com/accountCenter/postList?id=107593323" className={styles.aboutItemLink} target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("about/unnamed.png")} alt="hoyolab icon" className={styles.aboutItemImage} />
            <div className={styles.aboutItemText}>
              <h3>HoYoLAB CC</h3>
              <p>
              Indonesian guide content is content I always create on HoYoLAB.
              </p>
            </div>
            </a>
          </li>
          <li className={styles.aboutItem}>
          <a href="https://genshin-impact.fandom.com/wiki/User:SunaOwO" className={styles.aboutItemLink} target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("about/f816eab00.png")} alt="wiki icon" />
            <div className={styles.aboutItemText}>
              <h3>Wiki Fandom</h3>
              <p>
              Editing Data Genshin Impact Wiki Fandom EN language, Not very active but sometimes I edit some pages.
              </p>
            </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
