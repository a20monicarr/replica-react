
import './App.css';
import './index.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Join from './pages/Join';
import Error from './pages/Error';
import { Button } from 'bootstrap';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element ={<Home/>}></Route>
       <Route path='/discover' element ={<Discover/>}></Route>
       <Route path='/join' element ={<Join/>}></Route>
       <Route path='#' element ={<Error/>}></Route>
      </Routes>
     </BrowserRouter>
  );
}


