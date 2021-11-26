import './App.css';
import Intro from "./components/Intro/Intro";

import React, {useState} from "react";
import Modal from "./components/Windows/Modal/Modal";
import Signin from "./components/Forms/Signin/Signin";

function App() {
    const [modal, setModal] = useState(true)

  return (
      <div>
        <Intro onModalOpen={()=>setModal(true)}/>
        <Modal
            isOpened = {modal}
            title = 'Ваши данные'
            onModalClose={()=>setModal(false)}
        >
            <Signin/>



        </Modal>
      </div>
  );
}

export default App;
