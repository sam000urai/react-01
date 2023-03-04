import React, { useContext } from 'react';
import { Store } from '../store/index';
import { INCREMENT, DECREMENT, RESET } from '../actions/index';
import { Button, ListGroup } from 'react-bootstrap';

const ComponentE = () => {
  const { globalState, setGlobalState } = useContext(Store);
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
      <Button onClick={increment_handler}>+1</Button>
      <Button onClick={decrement_handler}>-1</Button>
      <Button onClick={reset_handler}>RESET</Button>

      <ListGroup>
        {globalState.todos.map((todo) => (
          <ListGroup.Item key={todo.id}>{todo.title}</ListGroup.Item>
        ))}
      </ListGroup>

    </div>
  );
};

export default ComponentE;
