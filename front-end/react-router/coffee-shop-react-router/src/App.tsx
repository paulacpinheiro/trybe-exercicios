// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Index';
import CoffeeList from './pages/coffee-list/Index';
import NavBar from './components/nav-bar/Index';
import Coffee from './pages/coffee/Index';


function App() {
   return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element= { <Home /> } />
        <Route path='/coffees' element={ <CoffeeList /> } />
        <Route path='/coffee:coffee' element={ <Coffee /> } />
      </Routes>
    </>
  )
}

export default App
