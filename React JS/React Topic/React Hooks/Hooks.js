import React, { useState } from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <FavoriteColor />
        )
    }
}
export default App;

function FavoriteColor(){
    const [color, setColor] = useState("red");
    return(
        <div>
            <h1>My favorite color is {color}!</h1>
                <button
                    type="button"
                    onClick={() => setColor("blue")}
                >Blue</button>
                <button
                    type="button"
                    onClick={() => setColor("red")}
                >Red</button>
                <button
                    type="button"
                    onClick={() => setColor("pink")}
                >Pink</button>
                <button
                    type="button"
                    onClick={() => setColor("green")}
                >Green</button>
        </div>
    )
}