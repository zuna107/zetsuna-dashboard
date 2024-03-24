import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Find me at:</h2>
      </div>
      <div className={styles.content}>
        {skills.map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <a
                href={skill.link}
                className={styles.skillLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.skillItem}>
                  <div className={styles.skillImageContainer}>
                    <img
                      src={getImageUrl(skill.imageSrc)}
                      alt={skill.title}
                      className={styles.skillImage}
                    />
                  </div>
                  <div className={styles.footer}>
                    <img
                      src={getImageUrl(skill.iconSrc)}
                      alt={skill.title}
                      className={styles.icon}
                    />
                    <div className={styles.info}>
                      <div className={styles.name}>{skill.title}</div>
                      <div className={styles.desc}>{skill.description}</div>
                    </div>
                    <div className={styles.more}>
                      <div className={styles.button}>More</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
