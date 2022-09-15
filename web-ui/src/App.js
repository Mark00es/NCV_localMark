import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePageForm from './HomePageForm';
import CrearActivoFijoForm from './components/CrearActivoFijoForm';
import LoginForm from './components/LoginForm';

function App(){
  return(
    <Router>
      <Routes>
        <Route path='/crear-activo-fijo' element={<CrearActivoFijoForm/>}></Route>
        <Route path='/home-ncv' element={<HomePageForm/>}></Route>
        <Route exact path='/' element={<LoginForm/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;