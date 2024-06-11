import React, {useReducer,useMemo, useEffect} from "react";
import { useParams } from "react-router-dom";
import { pokemonReducer, initialPokeDetails } from "../Reducers/pokemonReducer";
import { fetchSinglePokemon, fetchEvolutionData } from "../Reducers/pokeAPI";
import MoreInfoHeading from "./MoreInfoHeading";
import MoreInfoBody from "./MoreInfoBody"


function MoreInfoLanding () {
    const params = useParams();
    const pokeId = params?.id; 
    console.log('landers', params, pokeId)

    const [pokemonDetails, setPokemonDetails] = useReducer(pokemonReducer, initialPokeDetails);


    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pokeId]);

    
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
      
        <MoreInfoHeading memoPokemon={memoPokemon} />
        <MoreInfoBody memoPokemon={memoPokemon}/>
        
        </>
    )
}

export default MoreInfoLanding;

