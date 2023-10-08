import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  const update = () => {
    setCount(count+1);
  }
  const update1 = ()=>{
    setCount(count-1)
  }

  return(
    <div id='counter'>
      count = {count}
      <br></br>
      <button onClick={update}>Increment</button>
      <button onClick={update1}>Decrement</button>
    </div>
  );
}
function App() {
  return (
    <div id='main'>
      <Counter />
    </div>
  );
}
export default App;