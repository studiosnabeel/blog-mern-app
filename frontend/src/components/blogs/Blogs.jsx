import React from "react";
import styles from "./blog.module.css";

const Blogs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blogCards}>
        <h2>How to JWT authenticaiton in node.js</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet incidunt
          consequuntur ratione, eaque praesentium vitae aliquam nesciunt sunt
          eum fugiat?
        </p>
      </div>
      <div className={styles.blogCards}>
        <h2>How to JWT authenticaiton in node.js</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet incidunt
          consequuntur ratione, eaque praesentium vitae aliquam nesciunt sunt
          eum fugiat?
        </p>
      </div>
      <div className={styles.blogCards}>
        <h2>How to JWT authenticaiton in node.js</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet incidunt
          consequuntur ratione, eaque praesentium vitae aliquam nesciunt sunt
          eum fugiat?
        </p>
      </div>
    </div>
  );
};

export default Blogs;
