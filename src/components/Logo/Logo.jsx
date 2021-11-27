import React from 'react';
import s from './logo.module.css'
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className={s.logo}>
            <NavLink className={s.logoBtn} to='/'>INGIR.RU</NavLink>
        </div>
    );
};

export default Logo;