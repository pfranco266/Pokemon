
import './App.css'
import { Container } from './App.styled'
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { CartProvider } from './CartContext';  // Adjust the path based on your structure

import Home from "./assets/Home/Home"
import Nav from "./assets/Nav/Nav"
import Cart from './assets/Cart/Cart';



function App() {
  const [cart, setCart] = useState([]);
  return (
        <Container>
            <CartProvider>  
              <Nav/>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/cart" element={<Cart />}/>
              </Routes>
            </CartProvider>

        </Container>
  )
}

export default App
