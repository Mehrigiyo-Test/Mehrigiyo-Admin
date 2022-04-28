import React, { useState } from "react";
import "./PaymentMethods.scss";
import Title from "../../components/Title/Title";
import InputRadio from "../../components/InputRadio/InputRadio";
import Cash from "../../icons/Cash.svg";
import Card from "../../icons/Card.svg";
import AddIcon from "../../icons/Add.svg";
import AddCard from "../../components/Modal/_components/AddCard/AddCard";
import Modal from "../../components/Modal/Modal";

const PaymentMethods = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="methods">
      <div>
        <Title
          title={"Payment methods"}
          subtitle={"Bugun bemorlarimizga xizmat qilish uchun ajoyib kun."}
        />
      </div>

      <div className="input-radio">
        <InputRadio title={"Naqd pul"} icon={Cash} />
        <InputRadio title={"8600 53** **** 8093"} icon={Card} />
      </div>

      <div className="add-address" onClick={()=> setOpen(true)}>
        <img src={AddIcon} alt="add-icon" />
        <p className="add-address__text">Karta qo’shish</p>
      </div>
      { open &&<Modal children={<AddCard setOpen={setOpen} />} prop={setOpen} />}
    </div>
  );
};
export default PaymentMethods;
