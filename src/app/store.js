// creating redux-store (store is where all our reducer Slices are placed)

import { configureStore } from '@reduxjs/toolkit'; // for store
// reducer Slices for diff states
import userReducer from '../features/counter/userSlice';
import modalReducer from '../features/counter/modalSlice';
import todosReducer from '../features/counter/todosSlice';

export default configureStore({
  reducer: {
    modal: modalReducer,
    todos: todosReducer,
    user: userReducer, // keys of this reducer obj will be used to use the reducerSlice. user will be used to access states against this slice
  },
});
