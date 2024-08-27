import { useState } from 'react'
import './App.css'

function App() {
  let counter = 0;
  const [cntr, setCntr] = useState(counter)
  const addValue = () => {
    // console.log('added', Math.round(Math.random() * 4));
    // counter+=1;
    if(cntr<21)
    {setCntr(cntr+1)};
  }
  const removeValue = () => {
    // console.log('added', Math.round(Math.random() * 4));
    // counter+=1;
    if(cntr>0)
    {setCntr(cntr-1)};
  }
  return (
    <>
      <h1>Counter project</h1>
      <h2>My count now: {cntr}</h2>
      <button
      onClick={addValue}
      >Add</button>
      <button
      onClick={removeValue}
      >Remove</button>
    </>
  )
}

export default App
