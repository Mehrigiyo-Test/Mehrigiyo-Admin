import React from "react";
import styles from "./Edit.module.scss";
import { user } from "../../../../constants/user";
import Button from "../../../Buttons/Button";
const Edit = () => {
  const title = user.map((item) => [
    {
      title: "Foydalanuvchi nomi",
      item: `${item.surname} ${item.name}`,
    },
    {
      title: "Telefon raqami",
      item: item.number,
    },
    {
      title: "Elektron pochta (optinal)",
      item: item.email,
    },
  ]);

  return (
    <section className={styles.container}>
      <h4>My account</h4>
      <div className={styles.img}>
        {user.map((item) => (
          <img src={item.img} alt="" key={item.email} />
        ))}
      </div>
      <div className={styles.title}>
        {title.map((item) =>
          item.map((item) => (
            <div>
              <h6>{item.title}</h6>
              <p>{item.item}</p>
            </div>
          ))
        )}
      </div>
      <Button title={"Edit"} />
    </section>
  );
};

export default Edit;
