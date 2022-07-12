import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkSearch, searchTodo } from '../../features/counter/todosSlice'
// import NameInput from './NameInput'
// import NoteInput from './NoteInput'

function SearchInput() {

 // const activeUser = useSelector(s => s.user.activeUser)
 const isSearch = useSelector(s => s.todos.isSearch)
 const userName = useSelector(s => s.user.user.username)
 const dispatch = useDispatch()



 const handleSearch = (e) => {
  let searchValue = e.target.value
  if (searchValue) {
   dispatch(checkSearch(true))
   console.log('search got value and isSearch changed', isSearch);
  }
  dispatch(searchTodo(e.target.value))
 }

 return (
  <div className='input'>
   {
    // activeUser ? <h4>whats Up {userName}</h4> : <h4 onClick={() => dispatch(showModal(true))}>Please add up a name</h4>
   }
   <h4>whats up {userName}</h4>
   <input type="text" placeholder='Search Your Notes' onChange={(e) => handleSearch(e)} />

  </div>
 )
}

export default SearchInput