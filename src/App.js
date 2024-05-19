import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Snacks from './Snacks';
import VendingMachine from './Vending Machine';
import Soda from './Soda';
import Chips from './Chips';
import Nuts from './Nuts';
import "./App.css"

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <h1>Vending Machine!</h1>
          <Snacks />
          <Routes>
              <Route path="/" element={<VendingMachine />}/>
              <Route path="/Soda" element={<Soda />}/>
              <Route path="/Chips" element={<Chips />}/>
              <Route path="/Nuts" element={<Nuts />}/>
          </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
