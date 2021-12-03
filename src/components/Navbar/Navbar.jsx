import React from 'react';
import s from './navbar.module.css'
import Logo from "../Logo/Logo";
import Navsignup from "./NavSignUp/Navsignup";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Profilebar from "./ProfileBar/Profilebar";


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

                        <Outlet/>

                        {/*<Navsignup onModalOpen={props.onModalOpen}/>*/}


                </div>
            </div>


        </div>

    );
};

export default Navbar;