import React from "react";
import style from "./Title.module.scss";
import { ReactComponent as Search } from "./../../icons/Search.svg";
const Title = ({title,subtitle}) => {
  return (
    <section className={style.titleContainer}>
      <div>
        <h3 className={style.title}>{title}</h3>
        <p className={style.subtitle}>
         {subtitle}
        </p>
      </div>
    <div className={style.box}>
        <input type="text" placeholder="Qidirish" className={style.input}/>
        <span className={style.search}>
          <Search/>
        </span>
      </div>
    </section>
  );
};

export default Title;
