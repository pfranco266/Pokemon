
import './App.css'
import { Container } from './App.styled'
import { Routes, Route} from 'react-router-dom';
import React from 'react';
import { CartProvider } from './CartContext';  // Adjust the path based on your structure

import Home from "./assets/Home/Home"
import Nav from "./assets/Nav/Nav"
import Cart from './assets/Cart/Cart';
import PokemonCatalogFC from './assets/Pokemon/PokemonCatalogue';

import MoreInfoLanding from "./assets/PokemonMoreInfo/MoreInfoLanding"
import BrowseLanding from './assets/Collection/BrowseLanding';

function App() {
  return (
        <Container >
            <CartProvider>  
           

              <Nav/>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/collection" element={<BrowseLanding />}/>
                  <Route path="/collection/:id" element={<MoreInfoLanding/>}/>
                  <Route path="/pokemoncards" element={<PokemonCatalogFC />}/>
                  <Route path="/cart" element={<Cart />}/>
              </Routes>

            </CartProvider>

        </Container>
  )
}

export default App
