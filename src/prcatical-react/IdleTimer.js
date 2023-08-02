import React,{useRef,useState} from 'react';
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';

export default function IdleTimer() {
    const idleTimeRef = useRef(null);
    const [isLoggedIn,setIsLoggedIn] =useState(true)
  const [modalIsOpen,setModalIsOpen] =usestate()
    const onIdle =()=>{
   console.log("user is idle")
    }
  return (
    <div>
    {
        isLoggedIn ? <h2>hello awad</h2> : <h2>hello guest</h2>
    }

    <Modal isOpen={setModalIsOpen}>
        <h2>You have a idle for a while!</h2>
        <p>You will be logged out soon!</p>
        <div>
            <button onClick={logOut}>Logout?</button>
            <button onClick={stayActive}></button>
        </div>
    </Modal>
        <IdleTimer ref={idleTimeRef} timeout={5*1000} onIdle={onIdle}>

        </IdleTimer>
    </div>
  )
}
