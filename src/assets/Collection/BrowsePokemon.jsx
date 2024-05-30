import React, {useReducer} from "react";
import { HomeContainer, Title, PokemonGridContainer } from "../Home/Home.styled";
import { fetchEvolutionData, fetchSinglePokemon } from "../Reducers/pokeAPI";
import {initialPokeDetails, pokemonReducer} from "../Reducers/pokemonReducer";


function BrowsePokemon() {

const [pokemonDetails, dispatch] = useReducer(pokemonReducer, initialPokeDetails);



    return (

        <HomeContainer>
            <Title>
                HELLO
            </Title>
            <PokemonGridContainer>
                ayoo
            </PokemonGridContainer>
        </HomeContainer>
    )
}

export default BrowsePokemon;