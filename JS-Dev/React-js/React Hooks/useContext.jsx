// React js - React Hooks - Context
import React, { useState, createContext, useContext } from 'react';

// Create a context
const MyContext = createContext()

// Display component using useContext
function Display() {
    const user = useContext(MyContext)
    return (
        <>
            <div id='display'>
                Name = {user}
            </div>
        </>
    )
}

function App() {
    const [name,setName] = useState({name: ''})
    return (
        <>
            <div>
                <form>
                    <input type='text' id='ip-text'></input>
                    <input type='button' id='ip-button' value={'submit'} onClick={()=>{
                        var data = document.getElementById('ip-text').value
                        setName({name: data})
                    }}></input>
                </form>
            </div>
            <MyContext.Provider value={name.name}>
                {/* Use the Display component here */}
                <Display />
            </MyContext.Provider>
        </>
    )
}

export default App;