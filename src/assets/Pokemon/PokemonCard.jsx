import React, { useState, useEffect } from "react";
import { PokeContainer, PokeType, PokeHeightWeight, MovesContainer , InfoContainer, HitPoints, Name, SpriteContainer, Sprite} from "./Pokemon.styled";
import PreviousPokemon from "./PreviousPokemon";

function PokemonCard({ PokemonDetailUrl, index }) {
    const [pokemonDetails, setPokemonDetails] = useState({
        id: null,
        name: null,
        sprites: [],
        types: [],
        stats: {},
        species: {},
        height: null,
        weight: null,
        moves: [],
    })



    async function fetchSinglePokemon() {
        try {
            const response = await fetch(PokemonDetailUrl); // pokemondetailURL = https://pokeapi.co/api/v2/pokemon/1/ Pokemon speciesURL = https://pokeapi.co/api/v2/pokemon-species/1/ 
            const data = await response.json();
            console.log('from PokemonCard', data, index)
            setPokemonDetails(prev => {
                return {
                    ...prev,
                    id: data.id,
                    name: data.name,
                    height: (data.height / 10),
                    weight: data.weight,
                    sprites: [data.sprites.front_default, data.sprites.front_shiny, data.sprites.back_shiny, data.sprites.other.showdown.front_default, data.sprites.other.showdown.front_shiny, data.sprites.other.showdown.back_default, data.sprites.other.showdown.back_shiny],
                    stats: {
                        hp: data.stats[0].base_stat,
                        attack: data.stats[1].base_stat,
                        defense: data.stats[2].base_stat,
                        specialAttack: data.stats[3].base_stat,
                        specialDefense: data.stats[4].base_stat,
                        speed: data.stats[5].base_stat,
                    }, 
                    species: data.species,
                    types: data.types,
                    moves: data.moves,
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchSinglePokemon();
    }, [])

   
    return (
        <PokeContainer>
            <PreviousPokemon prev={pokemonDetails?.species}/>
            <Name>{pokemonDetails.name}</Name>
            <HitPoints>HP: {pokemonDetails.stats.hp}</HitPoints>
            <SpriteContainer backgroundType={pokemonDetails.types?.[0]?.type?.name}>
                <Sprite src={pokemonDetails.sprites[0]}></Sprite>
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


