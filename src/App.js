
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import error from './pages/error'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Link to="/nosotros">Nosotros</Link>
    </div>
      <Routes>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        <Route path='#'element ={error}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
