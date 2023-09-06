import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import StickyNavbar from './pages/layout/StickyNavbar';
import NoPage404 from "./pages/layout/NoPage404"
function App() {
  return (
      <>
   <StickyNavbar/>
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/AboutUs" element={<About />}></Route>
      <Route path="/*" element={<NoPage404 />}></Route>
    </Routes>
    </>
  );
}

export default App;
