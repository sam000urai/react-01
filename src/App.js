import React, { useState } from 'react';
import './App.css';
import Card from './Card';
const sampleArray = [
  { id: 1, name: 'aaa', date: 19920527 },
  { id: 2, name: 'bbb', date: 19920528 },
  { id: 3, name: 'ccc', date: 19920529 },
  { id: 4, name: 'ddd', date: 19920531 },
  { id: 5, name: 'eee', date: 19920501 }
];
function App() {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        {sampleArray.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default App;
