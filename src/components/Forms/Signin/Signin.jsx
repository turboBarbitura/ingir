import React from 'react';
import s from './signin.module.css'

const Signin = () => {
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
                <button className={s.loginBtn}>Войти</button>

                <hr/>

                <p className={s.notReg}>Еще не зарегистрированы?</p>

            </form>
        </div>
    );
};

export default Signin;