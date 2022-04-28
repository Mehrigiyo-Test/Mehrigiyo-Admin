import React from "react";
import Inputradio from "../../components/InputRadio/InputRadio";
import Title from "../../components/Title/Title";
import "./DeliveryAddress.scss";

import AddIcon from '../../icons/Add.svg';
import HomeImg from '../../images/Home.png';
import SmallArrow from '../../icons/SmallArrow.svg';
import Modal from "../../components/Modal/Modal";
import AddAddress from "../../components/Modal/_components/AddAddress/AddAddress";


const DeliveryAddress = () => {

  return (
    <div className="delivery">
      <Title
        title={"Payment methods"}
        subtitle={"Bugun bemorlarimizga xizmat qilish uchun ajoyib kun."}
      />
      <span className="delivery__text">edit</span>

      <div className="input-radio">
        <Inputradio title={"Uy"} subtitle={"Rasulov street, 407"} icon={SmallArrow} />
        <Inputradio title={"Ish"} subtitle={"Muqimiy street, 166"} icon={SmallArrow} />
      </div>

      <div className="add-address">
        <img src={AddIcon} alt="add-icon" />
        <p className="add-address__text">Manzil qo’shish</p>
      </div>

      <div>
        <img className="home-img" src={HomeImg} alt="homeImg" />
      </div>

      <Modal children={<AddAddress />} prop={'true'} />
    </div>
  );
};
export default DeliveryAddress;

