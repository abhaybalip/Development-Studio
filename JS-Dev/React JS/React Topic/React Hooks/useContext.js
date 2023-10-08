import React, { useContext } from 'react';

const MyContext = React.createContext();

function Producer(value) {
  const data = {value};
  return (
    <MyContext.Provider value={data}>
      <div>
        Data placed in MyContext by producer
      </div>
    </MyContext.Provider>
  );
}

function Consumer() {
  const data = useContext(MyContext);
  return (
    <MyContext.Consumer>
      {value => (
        <div>
          Data received by consumer: <br/>
          Data: {value}
        </div>
      )}
    </MyContext.Consumer>
  );
}

function App() {
  return (
    <div id='div-main'>
      <Producer value='my@data' />
      <Consumer />
    </div>
  );
}

export default App;