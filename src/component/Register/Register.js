"use client"
import React from 'react'
import Modal from '../common/Modal'
import { useRegister } from '@/hooks/CustomHooks'

const Register = ({ open, setOpen, handleOpen }) => {
  const { handleform, inVal, setInpval, loading } = useRegister(setOpen)

  return (
    <>
      <div>
        <Modal
          customOpen={open}
          title={'Create a Free Superio Account'}
          setOpen={setOpen}
        >
          <div className=' pt-8 pb-4' >
            <div class="mb-6">
              <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
              <input type="text" name='username' id="large-input" value={inVal.username} onChange={(e)=>setInpval((pre)=> ({...pre, username:e.target.value}))} placeholder='Email Address' class="block w-full p-4 text-gray-900 border-0 border-gray-300 rounded-lg bg-gray-200 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="mb-6">
              <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="text" name='password' value={inVal.password} onChange={(e)=>setInpval((pre)=> ({...pre, password:e.target.value}))} placeholder='Password' id="large-input" class="block w-full p-4 text-gray-900 border-0 border-gray-300 rounded-lg bg-gray-200 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>

          <div className='pb-6' >
            <button type="submit" onClick={handleform} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
          </div>

          <div className=' text-center pb-6' >
            <span>Don't have an account?</span>
            <span onClick={handleOpen} className=' cursor-pointer' >LogIn</span>
          </div>

          <div className='text-center pb-6'>
            <span>or</span>
          </div>

        </Modal>
      </div>

    </>
  )
}

export default Register

