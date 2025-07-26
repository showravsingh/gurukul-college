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
import StudentRegister from './pages/StudentRegister';
import StudentList from './pages/StudentList';
import EditStudentDetails from './pages/EditStudentDetails.js';
import GetStudentByID from './pages/GetStudentByID.js';
import RemoveStudentDetails from './pages/RemoveStudentDetails.js';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/StudentRegister' element={<StudentRegister />} />
          <Route path='/StudentList' element={<StudentList />} />
          <Route path='/EditStudentDetails' element={<EditStudentDetails />} />
          <Route path='/GetStudentById' element={<GetStudentByID />} />
          <Route path='/RemoveStudentDetails' element={<RemoveStudentDetails />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
