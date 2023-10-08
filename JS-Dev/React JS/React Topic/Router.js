import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link, NavLink } from 'react-router-dom';
const nav_style = {
  'list-style-type': 'circle',
  'display': 'inline-block'
}

export default function App(){
  return(
    <div>
      <div>
        <ul style={nav_style}>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/About'>About</a>
          </li>
          <li>
            <a href='/Contact'>Contact</a>
          </li>
        </ul>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/About' Component={About}></Route>
        <Route path='/Contact' Component={Contact}></Route>
      </Routes>
      </BrowserRouter>
      <Outlet></Outlet>
    </div>
  )
}

const Home = ()=>{
  return(
    <div>
      Home Page
    </div>
  )
}

const About = ()=>{
  return(
    <div>
      About Page
    </div>
  )
}

const Contact = ()=>{
  return(
    <div>
      Contact Page
    </div>
  )
}