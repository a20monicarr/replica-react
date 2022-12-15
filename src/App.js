
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import Home from './pages/Home';
import Join from './pages/Join';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
      <Routes>
       <Route path='/' element ={<Home/>}></Route>
       <Route path='discover' element ={<Discover/>}></Route>
       <Route path='join' element ={<Join/>}></Route>
       <Route path='error' element ={<Error/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
