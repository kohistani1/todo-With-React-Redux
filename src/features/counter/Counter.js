import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament, incByAmount, changeColor } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.count)
  const color = useSelector((state) => state.counter.color)
  const dispatch = useDispatch()
  const [value, setValue] = useState('')


  return (
    <>
      <div>
        <span style={{ color: color, display: 'block', marginBottom: '3rem' }}>{count}</span>
        <button className="btn"
          aria-label="Increment value"
          onClick={() => { dispatch(increament()) }}
        >
          Increment
        </button>
        <button className="btn"
          aria-label="Decrement value"
          onClick={() => { dispatch(decreament()) }}
        >
          Decrement
        </button>
        <button className="btn"
          aria-label="Decrement value"
          onClick={() => { dispatch(incByAmount(10)) }}
        >
          increament by 10
        </button>

        <div>
          <input placeholder="Change color of count" type="text" onChange={(e) => {
            return dispatch(changeColor(e.target.value))
          }} />
        </div>
      </div>
    </>
  );
}
