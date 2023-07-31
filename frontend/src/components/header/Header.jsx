import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { BiLogoBlogger } from "react-icons/bi";

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.list}>
          <BiLogoBlogger className={styles.logo} />
        </Link>
        <ul className={styles.ul}>
          <Link className={styles.list} to="/">
            <li>Home</li>
          </Link>
          <Link className={styles.list} to="/register">
            <li>Signup</li>
          </Link>
          <Link className={styles.list} to="/login">
            <li>Signin</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
