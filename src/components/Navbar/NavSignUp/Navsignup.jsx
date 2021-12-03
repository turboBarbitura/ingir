import React from 'react';
import s from "../navbar.module.css";

const Navsignup = (props) => {
    return (
            <div className={s.itemsLogin}>

                    <button className={s.itemLogin} onClick={props.onModalOpen}>Log In</button>

                    <a href="#" className={s.itemSignup}>Sign Up</a>

            </div>
    );
};

export default Navsignup;