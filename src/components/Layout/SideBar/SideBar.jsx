import React from "react";
import style from "./SideBar.module.scss";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Pen } from "./../../../icons/Sidebar/Pen.svg";
import { ReactComponent as ControlPanel } from "./../../../icons/Sidebar/ControlPanel.svg";
import { ReactComponent as Consultation } from "./../../../icons/Sidebar/Consultation.svg";
import { ReactComponent as DeliveryAddress } from "./../../../icons/Sidebar/DeliveryAddress.svg";
import { ReactComponent as LogOut } from "./../../../icons/Sidebar/LogOut.svg";
import { ReactComponent as Notification } from "./../../../icons/Sidebar/Notification.svg";
import { ReactComponent as Orders } from "./../../../icons/Sidebar/Orders.svg";
import { ReactComponent as PaymentMethods } from "./../../../icons/Sidebar/PaymentMethods.svg";
import { ReactComponent as Setting } from "./../../../icons/Sidebar/Setting.svg";
import { user } from "../../../constants/user";
const SideBar = () => {
  const navigate = useNavigate();
  const onPushPath = (href) => {
    navigate({ pathname: `/admin${href}` });
  };
  const pageTitle = [
    {
      icon: <ControlPanel />,
      text: `Boshqaruv paneli`,
      href: `/control-panel`,
    },
    { icon: <Consultation />, text: `Consultation`, href: `/consultation` },
    { icon: <Orders />, text: `Orders`, href: `/orders` },
    {
      icon: <DeliveryAddress />,
      text: `DeliveryAddress`,
      href: `/delivery-address`,
    },
    {
      icon: <PaymentMethods />,
      text: `PaymentMethods `,
      href: `/payment-methods`,
    },
    { icon: <Notification />, text: `Notifications`, href: `/notifications` },
    { icon: <Setting />, text: `Setting`, href: `/setting` },
  ];
  return (
    <section className={style.container}>
      <div className={style.user}>
        {user.map((item, index) => (
          <div key={index}>
            <span className={style.avatar}>
              <img src={item.img} alt="user"/>
            </span>
            <span>
              <h4 className={style.h4}>{item.surname}</h4>
              <h4 className={style.h4}>{item.name}</h4>
              <p className={style.p}>{item.number}</p>
            </span>
          </div>
        ))}
        <span className={style.pen}>
          <Pen />
        </span>
      </div>
      <div className={style.wrapper}>
        {pageTitle.map((item, index) => (
          <div
            className={style.pageTitle}
            key={index}
            onClick={() => onPushPath(item.href)}
          >
            <span className={style.flex}>{item.icon}</span>
            <h3 className={style.h3}>{item.text}</h3>
          </div>
        ))}
      </div>
      <div className={style.logout}>
        <span>
          <LogOut />
        </span>
        <p className={style.log}>Log Out</p>
      </div>
    </section>
  );
};

export default SideBar;
