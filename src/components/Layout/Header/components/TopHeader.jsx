import React from "react";
import { Link } from "react-router-dom";
import style from "./../Header.module.scss";

import { ReactComponent as UzbFlag } from "./../../../../icons/Header/UzbFlag.svg";
import { ReactComponent as Arrow } from "./../../../../icons/Header/Arrow.svg";
import { ReactComponent as Location } from "./../../../../icons/Header/Location.svg";
import { user } from "../../../../constants/user";
const TopHeader = () => {
  const titles = [
    { text: `Mahsulotlar katalogi`, link: `#` },
    { text: `Foto-lavhalar`, link: `#` },
    { text: `Yetkazib berish va to'lash`, link: `#` },
    { text: `Aksiya`, link: `#`, color: `#AB7A19` },
    { text: `Yangi`, link: `#`, color: `#53B175` },
  ];

  return (
    <section className={style.headerTopContainer}>
      <div className={style.title}>
        {titles.map(({ text, link, color }) => (
          <div key={text}>
            <Link to={link} style={color ? { color } : { color: `#505050` }}>
              {text}
            </Link>
          </div>
        ))}
      </div>
      <div className={style.about}>
        <div className={style.dropdown}>
          <UzbFlag />
          <span>
            <Arrow />
          </span>
        </div>
        <div className={style.dropdown}>
          <p>Toshkent shahar</p>
          <span>
            <Location />
          </span>
        </div>
        <div className={style.user}>
          {user.map((item, index) => (
            <>
              <span className={style.userAvatar}>
                <img src={item.img} alt="user" />
              </span>
              <div key={index} style={{ display: "flex" }}>
                <p>{item.surname[0]}.</p>
                <p>{item.name}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
