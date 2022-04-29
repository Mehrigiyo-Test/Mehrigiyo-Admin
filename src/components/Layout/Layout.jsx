import React from "react";
import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={styles.wrapper}>
        <div>
          <SideBar />
        </div>
        <div className={styles.child}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
