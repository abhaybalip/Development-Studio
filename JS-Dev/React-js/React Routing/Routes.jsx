// React js - Routing

import React from 'react'
import 'react-router-dom'
// import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Link, Outlet, Route, Router, Routes } from 'react-router-dom'

const Home = () => {
    return (
        <>Home Page</>
    )
}
const About = () => {
    return (
        <>About Page</>
    )
}
const Contact = () => {
    return (
        <>Contact Page</>
    )
}
function App() {
    return (
        <>
            <div id='tab' style={{ display: 'inline-block' }}>
                <BrowserRouter>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Contact">Contact</Link>
                    </nav>

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Contact' element={<Contact />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <Outlet />
        </>
    )
}
export default App;