import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add, remove } from './store/counterSlice';

function App() {
  const dispatch = useDispatch()

  let count = useSelector((state)=>state.counter.count)

  const handleAdd = () => {
    dispatch(add(1))
  }

  const sub = () => {
    dispatch(remove(1))
  }

  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <h1>{count}</h1>
      <button className='btn' onClick={handleAdd}>add</button>
      <button className='btn' onClick={sub}>subtract</button>
    </div>
  );
}

export default App;
