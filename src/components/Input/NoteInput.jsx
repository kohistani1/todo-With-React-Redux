import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showModal } from '../../features/counter/modalSlice'
import { addTodo, editIndex, editTodo, editTodoStatus } from '../../features/counter/todosSlice'




function NoteInput() {

 const editing = useSelector(s => s.todos.editing)
 const data = useSelector(s => s.todos.data)
 const todos = useSelector(s => s.todos.todos)

 const [inpVal, setInpVal] = useState('')
 const dispatch = useDispatch()

 useEffect(() => {
  if (editing) setInpVal(data.todo)
 }, [editing])



 const addNote = (e) => {
  e.preventDefault()
  const d = new Date()
  const hour = `${d.getHours()}`.padStart(2, 0)
  const minutes = `${d.getMinutes()}`.padStart(2, 0)
  const seconds = `${d.getSeconds()}`.padStart(2, 0)
  const time = `${hour}:${minutes}:${seconds}`
  const date = `${d.getDate()}`.padStart(2, 0)
  const id = new Date().getTime().toString()
  const note = { id, todo: inpVal, time, date }

  if (editing) {
   const index = todos.findIndex(todo => data.id === todo.id)
   console.log('index is ', index);
   dispatch(editIndex(index))
  }
  if (inpVal) {
   dispatch(addTodo(note))
  } else {
   alert('enter some value')
  }


  dispatch(showModal(false))
  dispatch(editTodo({ editing: false, data: '' }))

 }



 return (
  <div className='input note-inp'>
   <h4>Add Todo</h4>
   <form onSubmit={addNote}>
    <input type="text" value={inpVal} placeholder='Write your Note' onChange={(e) => setInpVal(e.target.value)} />
    <button className='btn btn-save'>{editing ? 'Update' : 'Add Note'}</button>
   </form>
  </div>
 )
}

export default NoteInput