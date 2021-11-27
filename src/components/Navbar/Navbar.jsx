import React, {useState} from 'react';
import s from './navbar.module.css'
import Logo from "../Logo/Logo";
import {NavLink} from "react-router-dom";



const Navbar = (props) => {



    return (
        <div className={s.navBar}>
            <div className={s.navWrapper}>
                <div className={s.navLogo}>
                    <Logo/>
                </div>
                <div className={s.navItems}>
                    <div className={s.navItemsMenu}>
                        <a href='#' className={s.item}>MENU1</a>
                        <a href='#' className={s.item}>MENU2</a>
                        <a href='#' className={s.item}>MENU3</a>
                        <a href='#' className={s.item}>MENU4</a>
                    </div>
                    <div className={s.itemsLogin}>
                        <button className={s.itemLogin} onClick={props.onModalOpen}>Log In</button>
                        <a href="#" className={s.itemSignup}>Sign Up</a>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Navbar;