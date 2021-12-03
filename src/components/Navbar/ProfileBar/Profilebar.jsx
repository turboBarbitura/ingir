import React from 'react';
import s from './profilebar.module.css'
import ava from '../../../img/ProfileAVA.png'
import {NavLink} from "react-router-dom";

const Profilebar = () => {
    return (
        <div className={s.profileBar}>

            <div className={s.profileBarAva}>
                <img className={s.ava} src={ava} alt="avatar"/>
            </div>

            <NavLink className={s.itemSignOut} to='/'>Sign Out</NavLink>



        </div>
    );
};

export default Profilebar;