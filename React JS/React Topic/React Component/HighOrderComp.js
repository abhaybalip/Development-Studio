import React from 'react';
class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <high_class Component={comp} />
    )
  }
}
export default App;

function high_class(Component){
  return(
    class extends React.Component{
      constructor(){
        super()
      }
      render(){
        return(
          <Component />
        )
      }
    }
  )
}
class comp extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        Hello World !
      </div>
    )
  }
}