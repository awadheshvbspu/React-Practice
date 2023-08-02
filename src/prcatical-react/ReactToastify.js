import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  export default function ReactToastify() {
  // toast.configure();
  const notify =()=>{
  // toast('Basic Notification',{position:toString.POSITION.TOP_LEFT})
  toast.success('Sucess notification!',{
    position:toast.POSITION.TOP_CENTER,
    autoClose:6000
  })
  toast.danger('Error notification!',{
    position:toast.POSITION.TOP_RIGHT,
    autoClose:false
  })
  toast.info('Sucess notification!',{
    position:toast.POSITION.BOTTOM_CENTER,
    autoClose:6000
  })
  toast.warning('Sucess notification!',{
    position:toast.POSITION.BOTTOM_LEFT,
    autoClose:6000
  })
  }
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer/>
    </div>
  )
}
