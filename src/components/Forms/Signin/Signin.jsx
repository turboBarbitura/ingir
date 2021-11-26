import React from 'react';
import s from './signin.module.css'

const Signin = () => {
    return (
        <div className={s.signinWrapper}>
            <form className={s.signinForm} action="#">
                <div className={s.userLogin}>
                    <input type="text" placeholder='Имя пользователя'/>

                </div>
                <div className={s.userPass}>
                    <input type="password" placeholder='Пароль'/>

                </div>
                <button className={s.loginBtn}>Sign In</button>

            </form>
        </div>
    );
};

export default Signin;