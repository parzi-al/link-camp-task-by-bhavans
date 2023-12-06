import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import Nav from './components/Navbar';
import Home from './pages/home';
import Event from './pages/event';
import React from "react";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home />}/>
 
        <Route path='/event' element={<Event/>} />
      </Routes>
    </BrowserRouter>
  
    
       {/* <Event/> */}
         
    </div>
  );
}

export default App;
