import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from '../../features/counter/modalSlice';
import { updateUser } from '../../features/counter/userSlice';

import './input.css'

function NameInput() {

 useEffect(() => {
  inpRef.current.focus()
 }, [])


 const inpRef = useRef()
 const userName = useSelector((state) => state.user.username)
 const dispatch = useDispatch()
 const [value, setValue] = useState('')


 const changeUserName = (e) => {
  e.preventDefault()
  const newUser = value.toUpperCase()
  if (newUser) {
   dispatch(updateUser(newUser))
   dispatch(showModal(false))
   inpRef.current.value = ''
  } else {
   alert('enter value to update')
  }
 }




 return (
  <div className='input name-input'>
   <h4>who are you {userName}</h4>
   <form onSubmit={changeUserName}>
    <input className='input-modal' type="text" placeholder='who are you' ref={inpRef} onChange={(e) => setValue(e.target.value)} />
    <button className='btn btn-save'>Save</button>
   </form>
  </div>
 )
}

export default NameInput