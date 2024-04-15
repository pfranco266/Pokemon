import React, { useState, useEffect } from "react";
import { PokeContainer, PokeType, PokeHeightWeight, MovesContainer , InfoContainer, HitPoints, Name, SpriteContainer, Sprite} from "./Pokemon.styled";
import PreviousPokemon from "./PreviousPokemon";

function PokemonCard({ index }) {
    const [pokemonDetails, setPokemonDetails] = useState({
        id: null,
        name: null,
        sprites: {},
        types: [],
        stats: {},
        species: {},
        height: null,
        weight: null,
        moves: [],
        evolutionTree: {}
    })



    async function fetchSinglePokemon() {
        try {
            const pokemonDetailUrl = `https://pokeapi.co/api/v2/pokemon/${index}/`;
            const pokemonSpeciesUrl =`https://pokeapi.co/api/v2/pokemon-species/${index}/`
            
            const [pokemonDetailData, pokemonSpeciesData] = await Promise.all([
                fetch(pokemonDetailUrl).then(response => response.json()),
                fetch(pokemonSpeciesUrl).then(response => response.json())
            ]);

            console.log('from PokemonCard', pokemonDetailData, index)
            console.log('from PokemonCard, species', pokemonSpeciesData, index)
           

            if (pokemonSpeciesData.evolution_chain && pokemonSpeciesData.evolution_chain.url) {
                const evolutionData = await fetchEvolutionData(pokemonSpeciesData.evolution_chain.url);
                setPokemonDetails(prev => {
                    return {
                        ...prev,
                        id: pokemonDetailData.id,
                        name: pokemonDetailData.name,
                        height: (pokemonDetailData.height / 10),
                        weight: pokemonDetailData.weight,
                        sprites: {
                            default: pokemonDetailData.sprites.front_default, 
                            backDefault: pokemonDetailData.sprites.back_default,
                            frontShiny: pokemonDetailData.sprites.front_shiny,
                            backShiny: pokemonDetailData.sprites.back_shiny,
                            
                        },
                        stats: {
                            hp: pokemonDetailData.stats[0].base_stat,
                            attack: pokemonDetailData.stats[1].base_stat,
                            defense: pokemonDetailData.stats[2].base_stat,
                            specialAttack: pokemonDetailData.stats[3].base_stat,
                            specialDefense: pokemonDetailData.stats[4].base_stat,
                            speed: pokemonDetailData.stats[5].base_stat,
                        }, 
                        species: pokemonDetailData.species,
                        types: pokemonDetailData.types,
                        moves: pokemonDetailData.moves,
                        evolutionTree: evolutionData
                    }
                })
            } else {
                setPokemonDetails(prev => ({
                    ...prev,
                    id: pokemonDetailData.id,
                    name: pokemonDetailData.name,
                    // other properties...
                    evolutionDetails: null
                }));
            }

            

        } catch (error) {
            console.log(error)
        }
    }

    async function fetchEvolutionData(evolutionChainUrl) {
        const response = await fetch(evolutionChainUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }

    console.log('DEETYS', pokemonDetails)

    useEffect(() => {
        fetchSinglePokemon();
    }, [])

   
    return (
        <PokeContainer>
            <PreviousPokemon prev={pokemonDetails?.species}/>
            <Name>{pokemonDetails.name}</Name>
            <HitPoints>HP: {pokemonDetails.stats.hp}</HitPoints>
            <SpriteContainer backgroundType={pokemonDetails.types?.[0]?.type?.name}>
                <Sprite src={pokemonDetails.sprites.default}></Sprite>
            </SpriteContainer>
            <InfoContainer>
                {pokemonDetails.types.map((type, index)=> {
                    return (
                        <PokeType id={index} type={type}>Type {index + 1}: {type.type.name} </PokeType>
                    )
                })}
                <PokeHeightWeight>Height: {pokemonDetails.height}m, </PokeHeightWeight>
                <PokeHeightWeight>Weight: {pokemonDetails.weight}lbs.</PokeHeightWeight>
                <MovesContainer>

                </MovesContainer>
            </InfoContainer>


        </PokeContainer>
    )
}

export default PokemonCard


