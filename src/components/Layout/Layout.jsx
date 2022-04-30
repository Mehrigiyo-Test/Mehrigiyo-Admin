import React, { useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";

import styles from "./Layout.module.scss";
import Modal from "../Modal/Modal";
import Login from "../Modal/_components/Login/Login";
import { isLogin } from "../../services/auth-service";

const Layout = ({ children }) => {
  const [login, setIsLogin] = useState(false);
  useEffect(() => {
    setIsLogin(isLogin());
  }, []);

  return (
    <>
      {login ? (
        <div className={styles.layoutContainer}>
          <Header />
          <div className={styles.wrapper}>
            <div>
              <SideBar />
            </div>
            <div className={styles.child}>{children}</div>
          </div>
        </div>
      ) : (
        <Modal children={<Login />} bolean={true} />
      )}
    </>
  );
};

export default Layout;
