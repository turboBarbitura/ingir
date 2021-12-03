import './App.css';
import Intro from "./components/Intro/Intro";

import React, {useState} from "react";
import Modal from "./components/Windows/Modal/Modal";
import Signin from "./components/Forms/Signin/Signin";
import Personalarea from "./components/PersonalArea/Personalarea";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
    const [modal, setModal] = useState(false)

  return (
      <BrowserRouter>



          <Routes>

            <Route path='/' element = {<Intro onModalOpen={()=>setModal(true)}/>} />

            <Route path='personal' element = { <Personalarea/> } />

          </Routes>

          {/*Модальное окно входа в личный кабинет*/}
          <Modal
              isOpened = {modal}
              title = 'Вход'
              desc = 'Авторизируйтесь, если вы уже зарегистрированы в нашем магазине.'
              onModalClose={()=>setModal(false)}
          >
              <Signin onModalClose =  {()=>setModal(false)} />
          </Modal>


      </BrowserRouter>
  );
}

export default App;
