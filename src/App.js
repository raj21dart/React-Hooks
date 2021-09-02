import React, { useState } from 'react'


function call(){
  console.log('run');
  return 4;
}

const App = () => {
  const [count, setCount] = useState(() => call())

  const decrementCount = () =>{
    let  count 
    setCount(prevCount => prevCount-1)
    console.log(count);
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount+1)
  }
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default App

