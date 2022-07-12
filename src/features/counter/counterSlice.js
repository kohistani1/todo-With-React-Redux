import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    color: 'red'
  },
  reducers: {
    increament: (state) => {
      state.count += 1
    },
    decreament: (state) => {
      --state.count
    },
    changeColor: (state, action) => {
      state.color = action.payload
    },
    incByAmount: (state, action) => {
      state.count += action.payload
    }
  }
})


export const { increament, decreament, incByAmount, changeColor } = counterSlice.actions
export default counterSlice.reducer


// import { createSlice } from "@reduxjs/toolkit";

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     count: 0,
//   },
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     },
//     decrement: (state) => {
//       state.count -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.count += action.payload;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;
