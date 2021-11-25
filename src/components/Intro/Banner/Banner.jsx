import React from 'react';
import s from './banner.module.css'

const Banner = () => {
    return (
        <div>
            <div className={s.logo}>
                <h1>ingir</h1>
                <p>Онлайн-магазин корейской косметики.</p>
            </div>

        </div>
    );
};

export default Banner;