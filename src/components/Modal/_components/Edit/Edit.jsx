import React, { useEffect, useState } from "react";
import styles from "./Edit.module.scss";
import { getUser } from "../../../../constants/user";
import Button from "../../../Buttons/Button";
const Edit = () => {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState([]);
  useEffect(() => {
    let users = getUser();
    setUser(users);
    
    let data = [
      {
        title: "Foydalanuvchi nomi",
        item: users.surname + " " + users.name,
      },
      {
        title: "Telefon raqami",
        item: `+${users.number}`,
      },
      {
        title: "Elektron pochta (optinal)",
        item: users.email,
      },
    ];

    setTitle(data);
  }, []);

  return (
    <>
      {user != null && title.length > 0 && (
        <section className={styles.container}>
          <h4>My account</h4>
          <div className={styles.img}>
            <img src={user.img} alt="" />
          </div>
          <div className={styles.title}>
            {title.map((item, index) => (
              <div key={index}>
                <h6>{item.title}</h6>
                <p>{item.item}</p>
              </div>
            ))}
          </div>
          <Button title={"Edit"} />
        </section>
      )}
    </>
  );
};

export default Edit;
