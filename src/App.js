import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    window.alert("Hello World");
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
         <button onClick={handleClick}>Hello World</button>
        </p>
      </header>
    </div>
  );
}
export default App;