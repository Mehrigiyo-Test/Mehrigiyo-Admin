import styles from "./AddCard.module.scss";
import Button from "../../../Buttons/Button";

import React from "react";

function AddCard() {
  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <h5>Karta qo’shish</h5>
        <form>
          <input type="number" placeholder="Card number" />
          <div className={styles.inputRow}>
            <input type="number" placeholder="Expires" />
            <input type="number" placeholder="CVV" />
          </div>
        </form>
        <div className={styles.btnInput}>
          <Button title={"Add card"} />
        </div>
      </div>
    </div>
  );
}

export default AddCard;
