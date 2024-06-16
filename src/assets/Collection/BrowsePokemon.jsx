import React, { useEffect, useReducer, useState } from "react";
import { BrowseContainer, OuterBrowseContainer } from "./Browse.styled";
import { LoadMore } from "../Pokemon/Pokemon.styled";
import { fetchPokeList } from "../Reducers/pokeAPI";
import { pokeListReducer, initialPokeList } from "../Reducers/pokemonListReducer";
import SinglePokeCard from "./SinglePokeCard";

function BrowsePokemon({ selectedOption }) {
    const [disableButton, setDisableButton] = useState(false);
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
        setDisableButton(false);
    }, []);

    useEffect(() => {
        const handleLoadAll = async () => {
            pokeListDispatch({ type: 'setLoading' });

            try {
                if (pokemonList?.list?.length >= 251) {
                    setDisableButton(true);
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
            {pokemonList.loading && <h2>Loading...Please wait</h2>}

            <BrowseContainer>
                {pokemonList && pokemonList?.list?.map((poke, index) => (
                    <SinglePokeCard selectedOption={selectedOption} key={index} index={index + 1} />
                ))}
            </BrowseContainer>

            {!pokemonList.loading && pokemonList?.list.length < 251 && 
                <LoadMore disabled={disableButton} onClick={() => fetchData(pokemonList.nextUrl)}>
                    Load more Pokémon
                </LoadMore>
            }

            {pokemonList?.list.length >= 251 && <h1>I only like the first 250ish Pokémon</h1>}
        </OuterBrowseContainer>
    );
}

export default BrowsePokemon;
