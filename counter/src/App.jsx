import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  // let counter  = 15;

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // counter++;
    if (counter < 20) { 
      // setCounter(counter + 1);
      // setCounter(++counter);
      setCounter((prevCounter) => prevCounter + 1);
    }
    // console.log(`Value added ${counter}`)
  };

  const removeValue = () => {
    if (counter > 0) { 
      setCounter(--counter);
    }
  };

  return (
    <>
      <h1>React Counter Project</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p>Footer :{counter}</p>
    </>
  )
}

export default App
