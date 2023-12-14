// React js - React Hook - useEffect
// used for side processing

// useEffect({})              => run on every render
// useEffect({},[]])          => run only on first render
// useEffect({},[prop,state]) => run on change in depedancy

import React, { useEffect, useState } from 'react'

function Timer() {
    const [count, setCount] = useState({ count: 0 })

    useEffect(() => {
        setTimeout(() => {
            setCount({ count: count.count + 1 })
        }, 1000);
    }, [count.count])

    return (
        <>
            <div>count {'=>'} {count.count}</div> <br />
        </>
    )
}

function App() {
    return Timer()
}
export default App