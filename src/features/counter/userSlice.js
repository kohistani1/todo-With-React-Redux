import { createSlice } from '@reduxjs/toolkit'; //to create Slice

export const userSlice = createSlice({
  name: 'user', //this name is used inside store for every slice
  initialState: {
    //this is the state object accessible by all actions of this slice
    isDashboard: false,
    activeUser: false,
    user: {
      username: '',
    },
  },
  reducers: {
    // all the actions are defined here
    updateUser: (state, action) => {
      //updateUser is a action, will be used through this slice
      state.user.username = action.payload;
      state.activeUser = true;
      console.log(
        'userUpdated and activeUser',
        state.activeUser,
        state.user.username
      );
    },
    showDashBoard: (state, action) => {
      state.isDashboard = action.payload;
    },
  },
});

export const { updateUser, showDashBoard } = userSlice.actions; //export all the actions here
export default userSlice.reducer; //export  reducer by default
