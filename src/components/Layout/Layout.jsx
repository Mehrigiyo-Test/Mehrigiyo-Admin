import React, { useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";

import styles from "./Layout.module.scss";
import { getUser } from "../../constants/user";
import Modal from "../Modal/Modal";
import Login from "../Modal/_components/Login/Login";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let users = getUser();
    if (users == null) {
      setShow(true);
    }
  }, []);

  return (
    <>
      {!show ? (
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
        <Modal children={<Login open={setShow} />} bolean={true} />
      )}
    </>
  );
};

export default Layout;
