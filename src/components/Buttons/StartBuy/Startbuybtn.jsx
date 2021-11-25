import React from 'react';
import s from './startbuybtn.module.css';


const Startbuybtn = () => {
    return (
        <div className={s.startBuy}>
            <button className={s.startBuyBtn}>Начать шоппинг</button>
        </div>
    );
};

export default Startbuybtn;