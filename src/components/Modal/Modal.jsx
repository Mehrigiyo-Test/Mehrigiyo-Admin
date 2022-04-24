import React from "react";
import styles from "./Modal.module.scss";
import { ReactComponent as Exit } from "../../icons/Exit.svg";

const Modal = ({ children, prop }) => {
  return (
    <div className={styles.bgContainer}>
      <section className={styles.wrapper}>
        <div className={styles.modal}>
          <span className={styles.exit} onClick={()=> prop(false)}>
            <Exit />
          </span>
          {children}
        </div>
      </section>
    </div>
  );
};

export default Modal;
