import { useState } from 'react';
import './App.css';

function App() {
  let counter = null;
  const [counter2, setCounter2] = useState(0);
  const increase =()=>{
    setCounter2(counter2 + 1);
  }
  return (
    <div>
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>click!</button>
    </div>

  );
}

export default App;
