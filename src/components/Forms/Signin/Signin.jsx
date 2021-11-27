import React from 'react';
import s from './signin.module.css'
import {NavLink} from "react-router-dom";




const Signin = (props) => {
    return (
        <div className={s.signinWrapper}>
            <form className={s.signinForm} action="#">
                <div className={s.userLogin}>
                   <input type="text" placeholder='Логин / E-mail'/>



                </div>
                <div className={s.userPass}>
                    <input type="password" placeholder='Пароль'/>


                </div>
                <p className={s.forgotPass}>Забыли пароль?</p>
                <NavLink to='/personal'  className={s.loginBtn} onClick={props.onModalClose}>Войти</NavLink>

                <hr/>

                <p className={s.notReg}>Еще не зарегистрированы?</p>

            </form>
        </div>
    );
};

export default Signin;