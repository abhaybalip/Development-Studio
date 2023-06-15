import React from 'react';

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            Name : "Name - Surname",
            Age  : "Number"
        }
    }
    render(){
        return(
            <div>
                <div>
                    Name : {this.state.Name}
                    Age  : {this.state.Age}
                </div>
                <button onClick={()=>this.UpdateState()} >state change</button>
            </div>
        )
    }
    UpdateState(Name,Age){
        this.setState({
            Name:Name,
            Age : Age
        })
    }
}

export default App