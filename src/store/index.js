import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/index';
export const SET_TODOS = 'SET_TODOS';

const initialState = {
    count: 0,
    todos: []
};

export const Store = createContext({
    globalState: initialState,
    setGlobalState: () => null
});


const StoreProvider = ({ children }) => {
    const [globalState, setGlobalState] = useReducer(reducer, initialState);
    return <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>;
};

export default StoreProvider;