import React from 'react';
import s from './signin.module.css'
import {TextField} from "@mui/material";



const Signin = () => {
    return (
        <div className={s.signinWrapper}>
            <form className={s.signinForm} action="#">
                <div className={s.userLogin}>
                    {/*<input type="text" placeholder='Логин / E-mail'/>*/}
                    <TextField className={s.userLoginI} id="standard-basic-l" label="Логин / E-mail" variant="standard"
                               InputLabelProps={{className: s.textFieldLogin}}
                    />


                </div>
                <div className={s.userPass}>
                    {/*<input type="password" placeholder='Пароль'/>*/}
                    <TextField className={s.userPassI} id="standard-basic-p" label="Пароль" variant="standard"
                        InputLabelProps={{className: s.textFieldPass}}
                    />

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