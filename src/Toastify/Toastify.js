import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Toastify() {

    const Toast =()=>{
        toast.success('login sucessfully',{
            position:'top-center'
        })
        toast.info('login sucessfully',{
            position:'top-center'
        })
        toast.warning('login unsucessfully',{
            position:'top-center'
        })
        toast.error('login sucessfully',{
            position:'top-center'
        })
       

    }
  return(
    <>
    <div className='text-center'>
        <h3 className='text-dark mt-5'>Welcome to sign page!</h3>
        <button className='btn btn-primary' onClick={Toast}>Login</button>
        </div>
        <ToastContainer/>
    </>
  )
}
