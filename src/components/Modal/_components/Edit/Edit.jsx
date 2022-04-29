import React from "react";
import styles from "./Edit.module.scss";
import Button from "../../../Buttons/Button";

import { user } from "../../../../constants/user";

const Edit = ({ setShow }) => {
  const arr = [
    {
      title: "Foydalanuvchi nomi",
      item: user.surname + " " + user.name,
    },
    {
      title: "Telefon raqami",
      item: `+${user.number}`,
    },
    {
      title: "Elektron pochta (optinal)",
      item: user.email,
    },
  ];

  return (
    <>
      {user != null && (
        <section className={styles.container}>
          <h4>My account</h4>
          <div className={styles.img}>
            <img src={user.img} alt="" />
          </div>
          <div className={styles.title}>
            {arr.map((item, index) => (
              <div key={index}>
                <h6>{item.title}</h6>
                <p>{item.item}</p>
              </div>
            ))}
          </div>
          <div onClick={() => setShow("update")}>
            <Button title={"Edit"} />
          </div>
        </section>
      )}
    </>
  );
};

export default Edit;
