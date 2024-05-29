import React, { useState, useEffect, useContext } from "react";
import { PokemonGridContainer, PokemonGridItem, LoadMore, PokeContainer, AddToCart, GridItems, Price } from "./Pokemon.styled";
import PokemonCard from "./PokemonCard"
import CartContext from "../../CartContext";
// import { v4 as uuid } from 'uuid';



function Pokemon() {
 
    const { cart, setCart } = useContext(CartContext);
    const {disableButton, setDisablebutton } = useState(false)

    const [pokeList, setPokeList] = useState({
        loading: true,
        error: '',
        list: [],
        initialUrl: `https://pokeapi.co/api/v2/pokemon/`,
        nextUrl: null,
    });



    const handleClick = (pokemonIndex) => {
        console.log(cart);
        setCart((prev) => {
            // Find if an item with the same pokemonIndex is already in the cart
            const existingItemIndex = prev.findIndex(item => item.index === pokemonIndex);
            if (existingItemIndex !== -1) {
                // If an item with the same index is found, increment its amount
                const newCart = [...prev];
                newCart[existingItemIndex].amount += 1;
                return newCart;
            } else {
                // If no such item exists, add a new one with a unique UUID
                return [...prev, {
                    index: pokemonIndex, // This is the Pokémon's unique identifier, like "1" for Bulbasaur
                    // id: uuid(), // Unique ID for each entry
                    
                    amount: 1, // Start with one item
                }];
            }
        });
    };

    async function fetchPokeList(url) {
        try {
            const response = await fetch(url);  ///   https://pokeapi.co/api/v2/pokemon/
            const data = await response.json();
            

            // console.log('Pokemon.jsx', data)
            setPokeList(prev => ({
                ...prev,
                loading: false,
                list: [...prev.list, ...data.results], 
                nextUrl: data.next, // Update the next URL
            }));
        } catch (error) {
            setPokeList(prev => ({
                ...prev,
                loading: false,
                error: error.message
            }));
        }
    }



    useEffect(() => {
        // Use the initialUrl for the first fetch
        fetchPokeList(pokeList.initialUrl);
    
    }, []); // Dependency on initialUrl, if it changes, re-fetch

    // Handler for loading more items
    const handleLoadMore = () => {
        if (pokeList.nextUrl) {
            fetchPokeList(pokeList.nextUrl);
        }
    };

    return (
        <PokeContainer>

            {pokeList.loading && <h1>Loading, please wait....</h1>}
            {pokeList.error && <h4>Error: {pokeList.error}</h4>}
            <PokemonGridContainer>
                {pokeList.list && pokeList.list.length > 0 && (
                    pokeList.list.map((poke, index) => (
                        <GridItems key={index}>

                            <PokemonGridItem >
                                <PokemonCard PokemonDetailUrl={poke.url} index={index + 1} />
                            </PokemonGridItem>
                            <Price>
                                $5.99
                            </Price>
                            <AddToCart aria-label="Add to cart" onClick={() => handleClick(index + 1)}>
                                Add to Cart
                            </AddToCart>
                        </GridItems>
                    ))
                )}



            </PokemonGridContainer>

            {!pokeList.loading && pokeList.list.length < 151. && <LoadMore disabled={disableButton} onClick={handleLoadMore}>Load more Pokemon</LoadMore>}
                        {disableButton ? <p>I only like the first 250ish pokemon </p> : null}
        </PokeContainer>
    );
}

export default Pokemon;

