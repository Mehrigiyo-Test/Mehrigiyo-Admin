import React from "react";
import styles from "./AddAddress.module.scss";
import Button from "../../../Buttons/Button";

function AddAddress({setOpen}) {
  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <h5>Manzil qo’shish</h5>
        <form>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Full address"></input>
          <div className={styles.inputRow}>
            <input type="text" placeholder="Apartment, office"></input>
            <input type="text" placeholder="Floor (optional)"></input>
          </div>
          <input type="number" placeholder="Door phone (optional)"></input>
          <input type="text" placeholder="Instructions for courier (optional)"></input>
        </form>
        <div className={styles.btnInput} onClick={()=>setOpen(false)}>
          <Button title={'Add address'} />
        </div>
      </div>
    </div>
  );
}

export default AddAddress;
