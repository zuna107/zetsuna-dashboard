import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zetsuna</h1>
        <p className={styles.description}>
        I am a Content Creator for Genshin Impact and other Hoyoverse Games. I am most active on HoYoLAB. But if you want to contact me personally, you can do so on Discord or other contact information.
        </p>
        <p className={styles.note}>*Please chat first before sending a Discord friend request</p>
        <a href="https://discordapp.com/users/948093919835590666" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
        <img src="discord.png" alt="Contact Icon" />
        Contact Me
      </a>


      </div>
      <img
        src={getImageUrl("hero/9ebe3880.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
