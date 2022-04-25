import React from "react";
import Title from "../../components/Title/Title";
import "./Orders.scss";
import OrderCard from "./_component/OrderCard/OrderCard";
const Orders = () => {
  return (
    <section>
      <Title title={'Order'} subtitle={'Bugun bemorlarimizga xizmat qilish uchun ajoyib kun.'}/>

      <OrderCard />
    </section>
  );
};
export default Orders;
