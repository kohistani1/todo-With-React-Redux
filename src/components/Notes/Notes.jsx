import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Note from '../Note/Note'
import './Notes.css'


function Notes() {
  const todos = useSelector((s) => s.todos.todos)
  const filterdTodos = useSelector(s => s.todos.filterdTodos)
  const isSearch = useSelector((s) => s.todos.isSearch)

  return (
    <div className='notes'>
      {
        isSearch ?
          filterdTodos.map(todo => <Note key={todo.id} {...todo} />) :
          todos.map(todo => <Note key={todo.id} {...todo} />)
      }


    </div>
  )
}

export default Notes