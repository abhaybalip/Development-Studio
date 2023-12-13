// React js - Props
import React from 'react'

// component uses supplied porps
class Greet extends React.Component {
  constructor() {
      super()
  }
  render() {
      return (
          <> Hello ,
              {
                  this.props.name
              }
          </>
      )
  }
}
// main application
class App extends React.Component {

  constructor() {
    super()
    this.menu = [
      'Home', 'Dept', 'About'
    ]
  }

  // props passed via function argument
  Tab = ({ props }) => {
    return (
      <>
        {props.map(function (value, index, array) {
          return (
            <div style={
              {
                height: 'auto',
                width: 'auto',
                display: 'inline-block',
                border: '1px solid black',
                borderRadius: '10px'
              }
            }>
              <div style={
                {
                  display: 'inline-block',
                  width: '07vh',
                  margin: '10px',
                  padding: '10px',
                  border: '1px solid black',
                  borderRadius: '10px'

                }
              } onClick={console.log('clicked')}
              >
                {/* {index}.  */}
                {value}
              </div>
            </div>
          )
        })}
      </>
    )
  }

  render() {
    return (
      <>
        <this.Tab props={this.menu}/> <br/>
        <Greet name='abhay'></Greet>
      </>
    )
  }
}

export default App;