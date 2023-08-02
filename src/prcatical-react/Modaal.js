import React,{useState} from 'react';
import Modal from 'react-modal';

export default function Modaal() {
  const[modalOpen,setModalOpen] =useState(false)
  return (
   <>
   <button onClick={()=>setModalOpen(true)}>Open Modal</button>
    <Modal isOpen={modalOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setModalOpen(false)}
    style={
        {backgroundColor:'grey',color:'orange'}
    }
    >
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <button onClick={()=>setModalOpen(false)}>Close</button>
    </Modal>
   </>
  )
}
