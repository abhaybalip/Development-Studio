import React from 'react';

const MyContext = React.createContext()

function clicked(){
}
function provider(){
  return(
    <div>
      <input type='text' onChange={(event)=>{
        var value = event.target.value
      }}></input>
      <br/>
    </div>
  );
}
function App(){
  return(
    provider()
  );
}
export default App;