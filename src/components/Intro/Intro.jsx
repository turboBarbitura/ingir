import React from 'react';
import s from './intro.module.css'
import Banner from "./Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Intro = () => {
    return (

      <div className={s.i}>
          <Navbar/>

          <Banner/>

      </div>


    );
};

export default Intro;