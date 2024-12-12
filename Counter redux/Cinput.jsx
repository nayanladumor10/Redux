import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './CounterAction';

export default function Cinput() {
    const counter = useSelector((state) => state);
    const dispatch = useDispatch();
  return (
    <div>
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </div>
  )
}
