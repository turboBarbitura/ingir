import React from 'react';
import s from './modal.module.css'

const Modal = (props) => {
    return (
        <div className={`${s.modalWrapper} ${props.isOpened ? s.open : s.close}`} style={{...props.style}}>
            <div className={s.modalBody}>
                <div className={s.modalClose} onClick={props.onModalClose}>×</div>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                {/*<hr/>*/}
                {props.children}
            </div>
        </div>
    );
};

export default Modal;