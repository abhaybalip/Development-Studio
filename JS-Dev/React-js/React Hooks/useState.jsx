// React js - Hooks - useState
// useState is used to manage state related data variable
import { React, useState } from 'react'

function App() {
    const [box, setBox] = useState({
        color: 'white',
        scale: 1,
        bool: true
    })

    return (
        <>
            <div style={{
                height: '10vh',
                width: '10vh',
                backgroundColor: box.color,
                border: '1px solid black',
                transition: '1s ease',
                transform: 'scale(' + box.scale + ',' + box.scale + ')'
            }}></div>
            <button style={{
                height: '10vh',
                width: '15vh'
            }} onClick={() =>
                setBox({
                    bool: !box.bool,
                    color: box.bool ? 'red' : 'yellow',
                    scale: box.bool ? 2 : 1,
                })
            }>Change</button>
        </>
    )
}
export default App;