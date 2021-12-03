import React from 'react';
import Navbar from "../Navbar/Navbar";
import s from './personalarea.module.css'
import {Route, Routes} from "react-router-dom";
import Navsignup from "../Navbar/NavSignUp/Navsignup";
import Profilebar from "../Navbar/ProfileBar/Profilebar";


const Personalarea = () => {
    return (
        <div className={s.pa}>
            <Routes>
                <Route path='/' element = {<Navbar/>}>
                    <Route  index element = {<Profilebar/>}/>
                </Route>
            </Routes>
            <div className={s.paWrapper}>
                <h1 className={s.paTitle}>Личный кабинет </h1>
                <div className={s.contentWrapper}>
                    <div className={s.paContent}>
                        <div className={s.contLeft}>
                            <div className={`${s.personInfo} ${s.cont}`}>
                                <div className={s.personInfoHeader}>
                                    <div className={s.ava}></div>
                                    <div className={s.person}>Джон Дое</div>
                                </div>
                                <div className={s.email}>e-mail: jhondoe@gmail.com</div>
                                <div className={s.phone}>+7-123-4567-89-00</div>
                                <div className={s.editInfo}>Редактировать профиль</div>

                            </div>
                            <div className={`${s.prodFav} ${s.cont}`}>
                                Избранное

                            </div>
                        </div>
                        <div className={s.contRight}>
                            <div className={`${s.myBuy} ${s.cont}`}>
                                История заказов
                                <hr/>
                                1. 232333 23
                                <hr/>
                                2. 43242323
                                <hr/>
                                3. 42342323

                            </div>
                        </div>
                    </div>
                    <div className={s.add}>
                        РЕКЛАМНЫЙ БЛОК
                        <hr/>
                        Подарок в каждом заказе.
                        <hr/>
                        Блаблабла.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personalarea;