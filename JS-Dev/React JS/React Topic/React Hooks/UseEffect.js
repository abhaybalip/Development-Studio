import React, { useEffect, useState } from 'react';

const testStye = {
  'color': 'black',
  'font-size': 'larger'
}

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(
    ()=>{
      setTimeout(() => {
        setCount(count+1)
      },1000)
    },
  )

  return(
    <div id='counter'>
      render count = {count}
      <br></br>
      {/* <button onClick={update}>Increment</button> */}
      {/* <button onClick={update1}>Decrement</button> */}
    </div>
  );
}

function Counter1() {
  const [count, setCount] = useState(0)

  useEffect(
    ()=>{
      setTimeout(() => {
        setCount(count+1)
      },1000)
    },
    [count]
  )

  return(
    <div id='counter'>
      render count = {count}
      <br></br>
      {/* <button onClick={update}>Increment</button> */}
      {/* <button onClick={update1}>Decrement</button> */}
    </div>
  );
}

function App() {
  return(
    <div id='main' style={testStye}>
      counter with no dependancy :
      <Counter />
      <br/>
      counter with dependancy :
      function is executed when dependancy value is changed 
      <Counter1 />
    </div>
  );
}
export default App;