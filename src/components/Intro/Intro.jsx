import React from 'react';
import s from './intro.module.css'
import Banner from "./Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Startbuybtn from "../Buttons/StartBuy/Startbuybtn";
import {Route, Routes} from "react-router-dom";
import Navsignup from "../Navbar/NavSignUp/Navsignup";



const Intro = (props) => {

    return (

        <div className={s.i}>
            <div className={s.itemsWrapper}>
                <div className={s.navBar}>
                    <Routes>
                        <Route path='/' element = {<Navbar onModalOpen={props.onModalOpen}/>}>
                            <Route  path='/' element = {<Navsignup onModalOpen={props.onModalOpen}/>}/>
                        </Route>


                    </Routes>

                </div>
                <div className={s.itemsContent}>
                    <div className={s.banner}>
                        <Banner/>
                    </div>
                    <div className={s.startBuyBtn}>
                        <Startbuybtn/>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Intro;