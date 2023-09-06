import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import StickyNavbar from './layout/StickyNavbar';

function App() {
  return (
      <>
   <StickyNavbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
    </>
  );
}

export default App;
