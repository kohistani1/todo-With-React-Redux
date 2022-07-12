import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, delTodo, editTodo } from '../../features/counter/todosSlice';

import './note.css';
import edit from '../../imgages/edit.png';
import del from '../../imgages/delete.png';
import { showModal } from '../../features/counter/modalSlice';

function Note({ id, todo, date, time }) {
  const editing = useSelector((s) => s.todos.editing);
  const data = useSelector((s) => s.todos.data);

  const dispatch = useDispatch();
  const noteRef = useRef();

  const note = {
    id,
    todo,
    date,
    time,
  };

  const editHandler = (id) => {
    dispatch(showModal(true));
    dispatch(editTodo({ data: note, editing: true }));
  };
  return (
    <div className='note'>
      <div className='left'>
        <p className='text' ref={noteRef}>
          {todo}
        </p>
        <span className='date'>
          dated {date} at {time}
        </span>
      </div>
      <div className='right'>
        <img src={edit} alt='edit' onClick={() => editHandler(id)} />
        <img src={del} alt='delete' onClick={() => dispatch(delTodo(id))} />
      </div>
    </div>
  );
}

export default Note;
