import React, { useState, useEffect } from "react";
import { PokeContainer, PokeType, PokeHeightWeight, MovesContainer, InfoContainer, HitPoints, Name, SpriteContainer, Sprite } from "./Pokemon.styled";
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
            const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${index}/`;

            const [pokemonDetailData, pokemonSpeciesData] = await Promise.all([
                fetch(pokemonDetailUrl).then(response => response.json()),
                fetch(pokemonSpeciesUrl).then(response => response.json())
            ]);

            if (pokemonSpeciesData.evolution_chain?.url) {
                const evolvesFromUrl = pokemonSpeciesData.evolves_from_species?.url || '';
                const evolutionData = await fetchEvolutionData(pokemonSpeciesData.evolution_chain.url, evolvesFromUrl);

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
            console.log(error.message)
        }
    }

    async function fetchEvolutionData(evolutionChainUrl, evolvesFromUrl) {
        try {
            const evolutionChainPromise = fetch(evolutionChainUrl).then(response => response.json());
            const evolvesFromPromise = evolvesFromUrl ? fetch(evolvesFromUrl).then(response => response.json()) : Promise.resolve(null);

            const [evolutionChain, evolvesFrom] = await Promise.all([evolutionChainPromise, evolvesFromPromise]);
            return { ...evolutionChain, evolvesFrom };
        } catch (error) {
            console.error("Error fetching evolution data:", error.message);
            return {};
        }
    }


    useEffect(() => {
        fetchSinglePokemon();
    }, [index])


    return (
        <PokeContainer>

            {pokemonDetails?.evolutionTree?.evolvesFrom?.name && <PreviousPokemon index={index} cardPokemon={pokemonDetails} />}

            <Name>{pokemonDetails.name}</Name>
            <HitPoints>HP: {pokemonDetails.stats.hp}</HitPoints>
            <SpriteContainer backgroundType={pokemonDetails.types?.[0]?.type?.name}>
                <Sprite src={pokemonDetails.sprites.default}></Sprite>
            </SpriteContainer>
            <InfoContainer>
                {pokemonDetails.types.map((type, index) => (
                    <PokeType key={index} type={type}>Type {index + 1}: {type.type.name}</PokeType>
                ))}
                <PokeHeightWeight>Height: {pokemonDetails.height}m, </PokeHeightWeight>
                <PokeHeightWeight>Weight: {pokemonDetails.weight}lbs.</PokeHeightWeight>

            </InfoContainer>
        </PokeContainer>
    );
}

export default PokemonCard


