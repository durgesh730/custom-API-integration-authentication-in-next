"use client"
import "./navbar.css"
import { useState } from "react";
import Login from '@/component/Login/Login'
import Register from '@/component/Register/Register'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [register, setRegister] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleRegister = () => {
    setOpen(false)
    setRegister(true)
  }

  return (
    <>
      <div className='Navbar'>
        <div className='Nav'>
          <div className='logo'>
            <span>Learnkoods</span>
          </div>
          <div className='RightNav'>
            <button onClick={handleOpen} className='login'>Login / Register</button>
          </div>
        </div>
      </div>
      <div>
        <Login open={open} setOpen={setOpen} handleRegister={handleRegister} />
      </div>
      <div>
        <Register open={register} setOpen={setRegister} handleOpen={handleOpen} />
      </div>
    </>
  )
}

export default Navbar
