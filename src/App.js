import React, { useState } from 'react'


function call(){
  console.log('run');
  return 4;
}

const App = () => {
  // const [count, setCount] = useState(() => call())
  const [state, setState] = useState({count: 4, theme: 'blue'})

  const decrementCount = () =>{
    // setCount(prevCount => prevCount-1)
    // setCount(prevCount => prevCount-1)

    setState(prevState => {
      return { ...prevState, count: prevState.count -1}
    })


  }

  const incrementCount = () => {
    // setCount(prevCount => prevCount+1)
  }
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      {/* <span>{count}</span> */}
      <span>{state.count}</span>
      <span>{state.theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default App

