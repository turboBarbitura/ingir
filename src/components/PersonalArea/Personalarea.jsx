import React from 'react';
import Navbar from "../Navbar/Navbar";
import s from './personalarea.module.css'

const Personalarea = () => {
    return (
        <div className={s.pa}>
            <Navbar/>
            <div className={s.paWrapper}>
                <h1>Личный кабинет</h1>
            </div>
        </div>
    );
};

export default Personalarea;