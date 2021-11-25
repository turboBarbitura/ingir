import React from 'react';
import s from './intro.module.css'
import Banner from "./Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Intro = () => {
    return (

        <div className={s.i}>
            <div className={s.itemsWrapper}>
                <div className={s.navBar}>
                    <Navbar/>
                </div>
                <div className={s.banner}>
                    <Banner/>
                </div>
            </div>
        </div>


    );
};

export default Intro;