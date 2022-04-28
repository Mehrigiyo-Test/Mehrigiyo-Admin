import styles from "./AddCard.module.scss";
import Button from "../../../Buttons/Button";

import React, { useState } from "react";

function AddCard({ setOpen }) {
  const [value, setValue] = useState("");
  let valuee = value.slice(0, 4);
  
  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <h5>Karta qo’shish</h5>
        <form>
          <input
            type="number"
            placeholder="Card number"
            onChange={(e) => setValue(e.target.value)}
          />
          <div className={styles.inputRow}>
            <input type="number" placeholder="Expires" />
            <div className={styles.inputNone}>
              {valuee !== "8600" ? (
                <input type="number" placeholder="CVV" />
              ) : null}
            </div>
          </div>
        </form>
        <div className={styles.btnInput} onClick={() => setOpen(false)}>
          <Button title={"Add card"} />
        </div>
      </div>
    </div>
  );
}

export default AddCard;
