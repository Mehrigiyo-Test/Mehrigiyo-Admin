import React, { useState } from "react";
import styles from "./Dropdown.module.scss";
const Dropdown = ({ title, dropdownItems }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <p className={styles.title} onMouseDown={()=> setOpen(!open)} >{title}</p>
      {open ? (
        <div className={styles.drop}>
          <section className={styles.container} onMouseLeave={()=> setOpen(!open)}>
            {dropdownItems.map((item, index) => (
              <div
                key={index}
                className={styles.dropdown}
                onClick={()=> setOpen(!open)}
              >
                <p>{item.label}</p>
              </div>
            ))}
          </section>
        </div>
      ):null}
    </div>
  );
};

export default Dropdown;
