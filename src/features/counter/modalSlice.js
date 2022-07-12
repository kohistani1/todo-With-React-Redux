import { createSlice } from "@reduxjs/toolkit";


export const modalSlice = createSlice({
 name: 'modal',
 initialState: {
  showModal: false

 },
 reducers: {
  showModal: (state, action) => {
   state.showModal = action.payload
   if (state.showModal) console.log('modal open now');
   if (!state.showModal) console.log('modal close now');
  }

 }
})

export const { showModal } = modalSlice.actions
export default modalSlice.reducer