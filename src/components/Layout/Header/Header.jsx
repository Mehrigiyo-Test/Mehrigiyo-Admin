import React from "react";
import BottomHeader from "./components/BottomHeader";
import TopHeader from "./components/TopHeader";
import style from "./Header.module.scss";
const Header = () => {
  return (
    <div className={style.headerWrapper}>
      <TopHeader />
      <BottomHeader />
    </div>
  );
};

export default Header;
