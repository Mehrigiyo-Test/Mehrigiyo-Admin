import React from "react";
import styles from "./ControlPanel.module.scss";
import "../../_global.scss";
import Title from "../../components/Title/Title";

const ControlPanel = () => {
  return (
    <>
      <section className={styles.container}>
        <div >
          <Title
            title={"Umumiy koʻrinish"}
            subtitle={"Bugun bemorlarimizga xizmat qilish uchun ajoyib kun."}
          />
        </div>
      </section>
    </>
  );
};
export default ControlPanel;
