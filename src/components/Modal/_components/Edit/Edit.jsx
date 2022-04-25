import React from "react";
import styles from "./Edit.module.scss";
import { user } from "../../../../constants/user";
import Button from "../../../Buttons/Button";
const Edit = () => {
  const title = [
    {
      title: "Foydalanuvchi nomi",
      item: `${user.surname} ${user.name}`,
    },
    {
      title: "Telefon raqami",
      item: user.number,
    },
    {
      title: "Elektron pochta (optinal)",
      item: user.email,
    },
  ];

  return (
    <section className={styles.container}>
      <h4>My account</h4>
      <div className={styles.img}>
        <img src={user.img} alt="" />
      </div>
      <div className={styles.title}>
        {title.map((item,index) => (
          <div key={index}>
            <h6>{item.title}</h6>
            <p>{item.item}</p>
          </div>
        ))}
      </div>
      <Button title={"Edit"} />
    </section>
  );
};

export default Edit;
