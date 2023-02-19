import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentA />} />
        <Route path="/components/componentb" element={<ComponentB />} />
        <Route path="/components/componentc" element={<ComponentC />} />
      </Routes>
    </Router>
  );
};
export default App