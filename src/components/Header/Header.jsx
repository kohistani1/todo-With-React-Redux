import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import align from '../../imgages/ali-center.png'
import fileManager from '../../imgages/file-manger.png'
import edit from '../../imgages/edit.png'
import { showModal } from '../../features/counter/modalSlice'

import './header.css'
import { useNavigate } from 'react-router-dom'
import { showDashBoard } from '../../features/counter/userSlice'


function Header() {

 const dispatch = useDispatch()
 const navigate = useNavigate()

 return (
  <div className='header'>
   <img src={align} alt="" onClick={() => dispatch(showModal(true))} />
   <img src={fileManager} alt="" />
   <button className='btn btn-logout' onClick={() => {
    navigate('/')
    localStorage.clear()
    dispatch(showDashBoard(false))
   }}>Log out</button>
  </div>
 )
}

export default Header