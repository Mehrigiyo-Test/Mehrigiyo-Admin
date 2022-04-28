import React from "react";
import "./PaymentMethods.scss";
import Title from '../../components/Title/Title';
import InputRadio from '../../components/InputRadio/InputRadio'
import Cash from '../../icons/Cash.svg';
import Card from '../../icons/Card.svg';
import AddIcon from '../../icons/Add.svg';


const PaymentMethods = () => {
  return (
    <div className="methods">
      <div>
        <Title title={"Payment methods"} subtitle={"Bugun bemorlarimizga xizmat qilish uchun ajoyib kun."} />
      </div>

      <div className="input-radio">
        <InputRadio title={"Naqd pul"} icon={Cash}/>
        <InputRadio title={"8600 53** **** 8093"} icon={Card}/>
      </div>

      <div className="add-address">
        <img src={AddIcon} alt="add-icon" />
        <p className="add-address__text">Karta qo’shish</p>
      </div>
    </div>
  );
};
export default PaymentMethods;
