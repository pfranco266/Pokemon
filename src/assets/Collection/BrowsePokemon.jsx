import React, { useEffect, useReducer, useState } from "react";
import { BrowseContainer, OuterBrowseContainer, DropdownButtonContainer } from "./Browse.styled";
import { LoadMore } from "../Pokemon/Pokemon.styled";
import { fetchPokeList } from "../Reducers/pokeAPI";
import { pokeListReducer, initialPokeList } from "../Reducers/pokemonListReducer";
import SinglePokeCard from "./SinglePokeCard";

function BrowsePokemon({ selectedOption }) {
    const [pokemonList, pokeListDispatch] = useReducer(pokeListReducer, initialPokeList);

    const fetchData = async (url) => {
        pokeListDispatch({ type: 'setLoading' });
        try {
            const { data } = await fetchPokeList(url);
            pokeListDispatch({
                type: 'setPokeList',
                payload: data
            });
        } catch (error) {
            pokeListDispatch({
                type: 'setError',
                payload: error.message
            });
        }
    }

    useEffect(() => {
        fetchData(pokemonList?.initialUrl);
    }, []);

    useEffect(() => {
        const handleLoadAll = async () => {

            try {
             
                if (pokemonList?.list?.length >= 251) {
                    return;
                }

                if (pokemonList?.nextUrl) {
                    const { data } = await fetchPokeList(pokemonList.nextUrl);
                    pokeListDispatch({
                        type: 'setPokeList',
                        payload: data
                    });
                    pokeListDispatch({ 
                        type: 'setLoading', 
                        payload: false 
                    });

                }
            } catch (error) {
                pokeListDispatch({
                    type: 'setError',
                    payload: error.message
                });
            }
        }

        handleLoadAll();
    }, [pokemonList?.nextUrl]);


    return (
        <OuterBrowseContainer>
            {pokemonList.list > 150? <h2>Loading...Please wait</h2> : null}

            <BrowseContainer>
                {pokemonList && pokemonList?.list?.map((poke, index) => (
                    <SinglePokeCard selectedOption={selectedOption} key={index} index={index + 1} />
                ))}
            </BrowseContainer>

   

            {pokemonList?.list.length >= 251 && <h1>I only like the first 250ish Pokémon</h1>}
        </OuterBrowseContainer>
    );
}

export default BrowsePokemon;
