import React from "react";
import "./InputRadio.scss";

const Inputradio = ({ title, subtitle, icon, id}) => {
  return (
    <>
      <label className="del-address">
        <div className="del-address__input">
          <div className="del-address__input__wrapper">
            <input type="radio" className="appearance-none rounded-full h-5 w-5 border-2 border-gray-300 bg-white checked:bg-[#53B175] checked:border-white focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id={id} name="input" />
            <div className="del-address__titles">
              <h2 className="del-address__titles__title">{title}</h2>
              <p className="del-address__titles__text">{subtitle}</p>
            </div>
          </div>

          <span className="next-btn">
            <img src={icon} alt="rasm" />
          </span>
        </div>
      </label>
    </>
  );
};

export default Inputradio;
