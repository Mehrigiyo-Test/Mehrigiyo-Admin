import React, { useState } from "react";
import styles from "./Update.module.scss";
import Button from "../../../Buttons/Button";

import { user } from "../../../../constants/user";
import { useForm } from "react-hook-form";
import { ReactComponent as EyeShow } from "../../../../icons/EyeShow.svg";
import { ReactComponent as EyeHidden } from "../../../../icons/EyeHidden.svg";

const EditUpdate = ({ setOpen }) => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <>
      {user != null && (
        <div className={styles.EditUpdate}>
          <div className={styles.Account}>
            <p className={styles.Account_title}>My account</p>
            <div className={styles.Account_avatar}>
              <img src={user.img} alt="" style={{ width: "100%" }} />
            </div>
            <p className={styles.Account_text}>Fotosurat yuklang (optinal)</p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit()}>
            <div className={styles.form_inputFirst}>
              <p>Foydalanuvchi nomi</p>
              <input
                type="text"
                {...register("name", { required: true, value: user.name })}
              />
            </div>
            <div className={styles.form_inputFirst}>
              <p>Telefon raqami</p>
              <input
                // type="number"
                {...register("number", { required: true, value: user.number })}
              />
            </div>
            <div className={styles.form_inputFirst}>
              <p>Elektron pochta (optinal)</p>
              <input
                type="email"
                {...register("email", { required: true, value: user.email })}
              />
            </div>
            <div
              className={`${styles.form_inputFirst} ${styles.form_inputPosition}`}
            >
              <p>Parolni o’ylab toping</p>
              <input
                type={show ? "text" : "password"}
                {...register("password", {
                  required: true,
                  value: user.password,
                })}
              />
              {show ? (
                <span onClick={() => setShow(false)}>
                  <EyeShow />
                </span>
              ) : (
                <span onClick={() => setShow(true)}>
                  <EyeHidden />
                </span>
              )}
            </div>
            <div className={styles.form_btn} onClick={handleSubmit(onSubmit)}>
              <Button title={"Update Profile"} />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditUpdate;
