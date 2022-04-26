import React from 'react';
import './InputRadio.scss'


const Inputradio = ({ title, subtitle, icon }) => {
    
    return (
        <>
            <div className='del-address'
            >
                <div className="del-address__input">
                    <span className="checkbox"></span>

                    <div className="del-address__titles">
                        <h2 className="del-address__titles__title">{title}</h2>
                        <p className="del-address__titles__text">{subtitle}</p>
                    </div>

                    <span className="next-btn">
                        <img src={icon} alt="rasm"/>
                    </span>
                </div>

            </div>
        </>
    );
}

export default Inputradio;
