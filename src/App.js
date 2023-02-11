import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const [names, setNames] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    setNames([...names, "satake"]);
  };

  return (
    <div>
      <button onClick={increment}>いいね！</button>
      <p>{count}</p>

      <button onClick={decrement}>よくないね！</button>
      <p>{count}</p>

      <button onClick={() => setCount(0)}>Reset</button>

      <p>{names}</p>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default App;