import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src="https://images.pexels.com/photos/5076529/pexels-photo-5076529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Blogger img"
      />
    </div>
  );
};

export default Hero;
