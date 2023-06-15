import React from 'react';

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            text : 'Welcome to react'
        }
    }
    clicked(event){
        console.log("clicked !")
        event.preventDefault()
        this.setState({
            text : 'clicked !'
        })
        this.forceUpdate()
    }
    render(){
        return(
            <div id='main-div'>
                <div id='text'>
                    Text : {this.state.text}
                </div>
                <br/>
                <button onClick={this.clicked.bind(this)} >Click Me</button>
            </div>
        )
    }
}
export default App;