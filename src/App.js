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

  return (
    <div>
      <button onClick={increment}>いいね！</button>
      <p>{count}</p>

      <button onClick={decrement}>よくないね！</button>
      <p>{count}</p>
    </div>
  );
}

export default App;