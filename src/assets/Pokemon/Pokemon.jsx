import React, { useState, useEffect, useContext, useReducer } from "react";
import { PokemonGridContainer, PokemonGridItem, LoadMore, PokeContainer, AddToCart, GridItems, Price } from "./Pokemon.styled";
import PokemonCard from "./PokemonCard"
import CartContext from "../../CartContext";
import { fetchPokeList } from "../Reducers/pokeAPI"
import { initialPokeList, pokeListReducer } from "../Reducers/pokemonListReducer"
// import { v4 as uuid } from 'uuid';



function Pokemon() {



    const { cart, setCart } = useContext(CartContext);
    const { disableButton, setDisablebutton } = useState(false)

    // const [pokeList, setPokeList] = useState({
    //     loading: true,
    //     error: '',
    //     list: [],
    //     initialUrl: `https://pokeapi.co/api/v2/pokemon/`,
    //     nextUrl: null,
    // });

    const [pokeList, dispatch] = useReducer(pokeListReducer, initialPokeList);





    const handleClick = (pokemonIndex) => {
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

 

    const fetchData = async (url) => {
        dispatch({ type: 'setLoading' });
        try {

            const { data } = await fetchPokeList(url);
            dispatch({
                type: 'setPokeList',
                payload: data
            });

        } catch (error) {
            dispatch({
                type: 'setError',
                payload: error.message
            });
        }
    }



    useEffect(() => {
        // Use the initialUrl for the first fetch


        fetchData(pokeList.initialUrl);

    }, []);

    async function handleLoadMore() {

        dispatch({ type: 'setLoading' });
        
        try {
            if (pokeList?.nextUrl) {
                await fetchData(pokeList.nextUrl)
            }
        } catch (error) {
            dispatch({
                type: 'setError',
                payload: error.message
            })
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

            {!pokeList.loading && pokeList?.list.length < 251 && 
               <LoadMore disabled={disableButton} onClick={handleLoadMore}>
               Load more Pokemon
             </LoadMore>
            
             }

             {pokeList?.list.length > 251 ? <h1>I only like the first 250ish Pokemon</h1> : null}
        </PokeContainer>
    );
}

export default Pokemon;

