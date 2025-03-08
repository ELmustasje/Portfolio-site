import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Thomas</h1>
        <p className={styles.description}>
          I'm a computer science student at the University of Bergen, and board memeber at both FriByte and BSI-golf.
          Winner of Labyrinten UiB (team programming contest), qualified to the final in Oslo.
        </p>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
