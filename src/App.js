import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Contact from './Components/Contact/Contact'
import Index from './Components/Index/Index';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;