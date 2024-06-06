import React, {useReducer,useMemo, useEffect} from "react";
import { useParams } from "react-router-dom";
import {Heading} from "./MoreInfo.styled"
import { PokemonName } from "../Collection/Browse.styled";
import { pokemonReducer, initialPokeDetails } from "../Reducers/pokemonReducer";
import { fetchSinglePokemon, fetchEvolutionData } from "../Reducers/pokeAPI";
import MoreInfoHeading from "./MoreInfoHeading";
import Evolution from "./Evolution";
import MoreInfoBody from "./MoreInfoBody"


function MoreInfoLanding () {
    const params = useParams();
    const pokeId = Number(params?.id); 
    const [pokemonDetails, setPokemonDetails] = useReducer(pokemonReducer, initialPokeDetails);

    async function fetchData (pokeId) {
        setPokemonDetails({
            type: 'setLoading', 
        })
        try {
            const {pokemonSpeciesData, pokemonDetailData} = await fetchSinglePokemon(pokeId);
          
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
const memoPokemon = useMemo(() => pokemonDetails, [pokemonDetails]);


    useEffect(()=> {
        fetchData(pokeId);
    },[pokeId])

    return (
        <>
      
        <MoreInfoHeading memoPokemon={memoPokemon} pokeId={pokeId}/>
        <MoreInfoBody memoPokemon={memoPokemon}/>
        
        </>
    )
}

export default MoreInfoLanding;

