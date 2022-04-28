import React, { useState } from "react";
import styles from "./EditUpdate.module.scss";
import Button from "../../components/Buttons/Button";

const EditUpdate = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.EditUpdate}>
      <div className={styles.Account}>
        <p className={styles.Account_title}>My account</p>
        <div className={styles.Account_avatar}></div>
        <p className={styles.Account_text}>Fotosurat yuklang (optinal)</p>
      </div>
      <form className={styles.form}>
        <div className={styles.form_inputFirst}>
          <p>Foydalanuvchi nomi</p>
          <input type="text" placeholder="Laziz" />
        </div>
        <div className={styles.form_inputFirst}>
          <p>Telefon raqami</p>
          <input type="number" />
        </div>
        <div className={styles.form_inputFirst}>
          <p>Elektron pochta (optinal)</p>
          <input type="email" placeholder="example@gmail.com" />
        </div>
        <div
          className={`${styles.form_inputFirst} ${styles.form_inputPosition}`}
        >
          <p>Parolni o’ylab toping</p>
          <input type={show ? "text" : "password"} />
          {show ? (
            <span onClick={() => setShow(false)}>+</span>
          ) : (
            <span onClick={() => setShow(true)}>-</span>
          )}
        </div>
        <div className={styles.form_btn}>
          <Button title={"Update Profile"} />
        </div>
      </form>
    </div>
  );
};

export default EditUpdate;
