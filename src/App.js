import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/home' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/service' Component={Service}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
