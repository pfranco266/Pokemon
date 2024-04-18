
import './App.css'
import { Container } from './App.styled'
import { Routes, Route } from 'react-router-dom';
import React, { createContext, useContext, useState } from 'react';

import Home from "./assets/Home/Home"
import Nav from "./assets/Nav/Nav"
import Cart from './assets/Cart/Cart';



function App() {
  const [cart, setCart] = useState([]);
  return (
    <Container>
          <Nav/>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/cart" element={<Cart />}/>
          </Routes>
    </Container>
  )
}

export default App
