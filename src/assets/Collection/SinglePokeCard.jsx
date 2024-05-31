import React, {useEffect, useReducer, useMemo} from "react";

import { fetchSinglePokemon, fetchEvolutionData } from "../Reducers/pokeAPI";
import { pokemonReducer, initialPokeDetails } from "../Reducers/pokemonReducer";
import { HomeContainer } from "../Home/Home.styled";


function SinglePokeCard({poke, index}) {

const [pokemonDetails, setPokemonDetails] = useReducer(pokemonReducer, initialPokeDetails);



    async function fetchData (index) {
            setPokemonDetails({
                type: 'setLoading', 
            })
            try {
                const {pokemonSpeciesData, pokemonDetailData} = await fetchSinglePokemon(index);
              
                if (pokemonSpeciesData.evolution_chain?.url) {
      
                  const evolvesFromUrl = pokemonSpeciesData.evolves_from_species?.url || '';
                  const evolutionData = await fetchEvolutionData(pokemonSpeciesData.evolution_chain.url, evolvesFromUrl);
              
      
                  setPokemonDetails({
                      type: 'setPokemonDetails',
                      payload: { pokemonDetailData, pokemonSpeciesData, evolutionData }
                  })
              } 
      
            } catch (error) {
                setPokemonDetails({
                    type: 'setError',
                    payload: error.message
                })
            }
    }



    useEffect(() => {
        fetchData(index);
    }, [])


    const memoPokemon = useMemo(() => pokemonDetails, [pokemonDetails]);

    return (
        <HomeContainer>
            {memoPokemon.name}
            



        </HomeContainer>
    )
}

export default SinglePokeCard;