import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../../features/counter/modalSlice'
import { checkSearch } from '../../features/counter/todosSlice'

import NameInput from '../Input/NameInput'
import NoteInput from '../Input/NoteInput'
import SearchInput from '../Input/SearchInput'
import Modal from '../Modal/Modal'
import Notes from '../Notes/Notes'
import redPlus from '../../imgages/plus-red.png'
import whitePlus from '../../imgages/plus-black.png'



import './main.css'

function Main() {
 const dispatch = useDispatch()
 const isModalOpen = useSelector(s => s.modal.showModal)
 const user = useSelector(s => s.user.activeUser)

 console.log('user', user)
 return (
  <>
   <div className='main'>
    <img className='red-plus' src={user ? whitePlus : redPlus} alt="add-name" onClick={() => {
     dispatch(checkSearch(false))
     dispatch(showModal(true))
    }} />
    {user && <SearchInput />}
    {isModalOpen && !user && <Modal inpComp={<NameInput />} />}
    {isModalOpen && user && <Modal inpComp={<NoteInput />} />}
    <Notes />
   </div>
   <div className="footer"></div>
  </>
 )
}

export default Main