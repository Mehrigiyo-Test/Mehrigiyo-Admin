import React from "react";
import styles from "./ControlPanel.module.scss";
import Title from "../../components/Title/Title";

import {ReactComponent as BoldArrow} from '../../icons/BoldArrow.svg'
const ControlPanel = () => {
  return (
    <>
      <section className={styles.container}>
        <div>
          <Title
            title={"Umumiy koʻrinish"}
            subtitle={"Bugun bemorlarimizga xizmat qilish uchun ajoyib kun."}
          />
        </div>
        <div>
          <div>
            <span className={styles.nextTable}>
              <h4>Kelgusi jadval</h4>
              <span>
                <p>Hammasi</p>
                <BoldArrow/>
              </span>
            </span>
          </div>

          <div></div>
        </div>
      </section>
    </>
  );
};
export default ControlPanel;
