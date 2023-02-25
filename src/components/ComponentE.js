import React, { useContext } from 'react';
import { Store } from '../store/index';
import { INCREMENT, DECREMENT, RESET } from '../actions/index';

const ComponentE = () => {
  const { globalState, setGlobalState } = useContext(Store);

  const { todos } = globalState;

  const increment_handler = () => {
    setGlobalState({
      type: INCREMENT
    });
  };
  const decrement_handler = () => {
    setGlobalState({
      type: DECREMENT
    });
  };
  const reset_handler = () => {
    setGlobalState({
      type: RESET
    });
  };

  console.log(globalState);
  return (
    <div>
      <h1>ComponentE.js</h1>
      <button onClick={increment_handler}>+1</button>
      <button onClick={decrement_handler}>-1</button>
      <button onClick={reset_handler}>RESET</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentE;