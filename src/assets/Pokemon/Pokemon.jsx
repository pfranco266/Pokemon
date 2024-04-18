import React, { useState, useEffect } from "react";
import { PokemonGridContainer, PokemonGridItem, LoadMore, PokeContainer, AddToCart, GridItems, Price } from "./Pokemon.styled";
import PokemonCard from "./PokemonCard"
function Pokemon() {

    const [pokeList, setPokeList] = useState({
        loading: true,
        error: '',
        list: [],
        initialUrl: `https://pokeapi.co/api/v2/pokemon/`,
        nextUrl: null,
    });

    const [cart, setCart] = useState([

    ]);

    function handleClick(index) {
        setCart(prev => {
            if (prev.indexOf(index) === -1) {  
                return [...prev, index];
            } else {
                return prev; 
            }
        });
    }

    console.log('mycart', cart);
    async function fetchPokeList(url) {
        try {
            const response = await fetch(url);  ///   https://pokeapi.co/api/v2/pokemon/
            const data = await response.json();
            console.log('Pokemon.jsx', data)
            setPokeList(prev => ({
                ...prev,
                loading: false,
                list: [...prev.list, ...data.results], // Append new results
                nextUrl: data.next // Update the next URL
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
                            <Price>$5.99</Price>
                            <AddToCart onClick={() => handleClick(index)}>
                                    Buy Card
                                </AddToCart>
                        </GridItems>
                    ))
                )}



            </PokemonGridContainer>

            {!pokeList.loading && pokeList.list.length < 151. && <LoadMore onClick={handleLoadMore}>Load more Pokemon</LoadMore>}

        </PokeContainer>
    );
}

export default Pokemon;
