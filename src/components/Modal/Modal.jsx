import React from 'react'
import { useDispatch } from 'react-redux'
import { showModal } from '../../features/counter/modalSlice'
import { editTodo, editTodoStatus } from '../../features/counter/todosSlice'
import Overlay from '../Overlay/Overlay'
import './modal.css'

function Modal({ inpComp }) {
 const dispatch = useDispatch()

 return (
  <div className='modal'>
   <Overlay />
   {/* will render only one component from inputName || inputNOte */}
   {inpComp}
   <span className='btn-close' onClick={() => {
    dispatch(showModal(false))
    dispatch(editTodo({ editing: false, data: '' }))
   }
   }>X</span>
  </div>
 )
}

export default Modal