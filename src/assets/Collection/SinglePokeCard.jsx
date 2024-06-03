import React, {useEffect, useReducer, useMemo} from "react";
import { Link } from "../Nav/Nav.styled";
import { fetchSinglePokemon, fetchEvolutionData } from "../Reducers/pokeAPI";
import { pokemonReducer, initialPokeDetails } from "../Reducers/pokemonReducer";
import {PokemonSVG, SinglePokemonContainer, PokemonName, PokemonIndex} from "./Browse.styled"
import PokemonTypes from "./PokemonTypes"
import Pokeball from "./Pokeball";


function SinglePokeCard({ index}) {

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

    //TYPE FOR LATER
    // memoPokemon.types[0].type.name
    const memoPokemon = useMemo(() => pokemonDetails, [pokemonDetails]);

  
 
    
    const calculateHeight = () => {
        const baseHeight = 10; // Base height in em
        const maxHeight = 15; // Maximum height in em

      const calculatedHeight = baseHeight + pokemonDetails.height * 0.25;
      const min = Math.min(calculatedHeight, maxHeight);
      return min;
    };

    return (
        
        <SinglePokemonContainer type={memoPokemon?.types[0]?.type?.name}>
           <PokemonIndex> #{index}</PokemonIndex> <PokemonName> {memoPokemon.name}</PokemonName>

           
           
                <PokemonTypes key={index} types={memoPokemon?.types}/>
                <Pokeball/>
         

            <PokemonSVG size={calculateHeight} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`} alt={memoPokemon.name} />
        
        </SinglePokemonContainer>
      
    )
}

export default SinglePokeCard;