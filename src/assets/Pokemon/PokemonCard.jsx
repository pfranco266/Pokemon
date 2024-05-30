import React, { useState, useEffect, useMemo, useReducer } from "react";
import { ResistanceDescription, WeaknessDescription, GenerationDescription, IndividualPokeContainer, PokeType, PokeHeightWeight, GenerationContainer, WeaknessContainer, ElementContainer, ResistanceContainer, PokemonMoveContainer, PokemonDescriptionContainer, PokemonDescription, InfoContainer, HitPoints, Name, SpriteContainer, Sprite } from "./Pokemon.styled";
import PreviousPokemon from "./PreviousPokemon";
import PokemonWeak from "./PokemonWeak"
import { pokemonReducer, initialPokeDetails } from "../Reducers/pokemonReducer";

function PokemonCard({ index }) {

    const [pokemonDetails, dispatch] = useReducer(pokemonReducer, initialPokeDetails);

    const [randomMove, setRandomMove] = useState(Math.floor(Math.random() * (pokemonDetails.moves.length || 1)));
    const [randomDescription, setRandomDescription] = useState(Math.floor(Math.random() * (pokemonDetails.description.length || 1)));


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
                // console.log('evo', evolutionData, 'deailtData', pokemonDetailData, '  species', pokemonSpeciesData)
                dispatch({
                    type: 'setPokemonDetails',
                    payload: { pokemonDetailData, pokemonSpeciesData, evolutionData }
                })
            } 
        } catch (error) {
            console.log(error.message)
            dispatch({
                type: 'error',
                action: error.message
            })

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

    const memoizedPokemonDetails = useMemo(() => pokemonDetails, [pokemonDetails]);


    useEffect(() => {

        setRandomMove(Math.floor(Math.random() * (memoizedPokemonDetails.moves.length || 1)));
        setRandomDescription(Math.floor(Math.random() * (memoizedPokemonDetails.description.length || 1)));
    }, [memoizedPokemonDetails.moves.length, memoizedPokemonDetails.description.length]);




    return (
        <IndividualPokeContainer color1={memoizedPokemonDetails.types?.[0]?.type?.name || '#f1f1f1'} color2={memoizedPokemonDetails.types?.[1]?.type?.name}>
          {memoizedPokemonDetails?.evolutionTree?.evolvesFrom?.name && (
            <PreviousPokemon backgroundType={memoizedPokemonDetails.types} index={index} cardPokemon={memoizedPokemonDetails} />
          )}
          <Name>{memoizedPokemonDetails.name}</Name>
          <HitPoints>HP: {memoizedPokemonDetails.stats.hp}</HitPoints>
          <SpriteContainer backgroundType={memoizedPokemonDetails.types?.[0]?.type?.name}>
            <Sprite src={memoizedPokemonDetails.sprites.default}></Sprite>
          </SpriteContainer>
          <InfoContainer>
            {memoizedPokemonDetails.types.map((type, index) => (
              <PokeType key={index} type={type.type.name}>Type {index + 1}: {type.type.name}</PokeType>
            ))}
            <PokeHeightWeight>Height: {memoizedPokemonDetails.height}m, </PokeHeightWeight>
            <PokeHeightWeight>Weight: {memoizedPokemonDetails.weight}lbs.</PokeHeightWeight>
          </InfoContainer>
          <PokemonDescriptionContainer>
            <PokemonDescription>
              {memoizedPokemonDetails.description[randomDescription]}
            </PokemonDescription>
          </PokemonDescriptionContainer>
          <PokemonMoveContainer>
            <Name>
              Special Move: {memoizedPokemonDetails?.moves[randomMove]?.move?.name}
            </Name>
            <Name>
              {memoizedPokemonDetails?.stats.specialAttack}
            </Name>
          </PokemonMoveContainer>
          <ElementContainer>
            <WeaknessContainer>
              <WeaknessDescription>Weaknesses</WeaknessDescription>
              <PokemonWeak type1={memoizedPokemonDetails?.types[0]?.type.name} type2={memoizedPokemonDetails?.types[0]?.type?.name} resist={false} weak={true} />
            </WeaknessContainer>
            <ResistanceContainer>
              <ResistanceDescription>Resistance</ResistanceDescription>
              <PokemonWeak type1={memoizedPokemonDetails?.types[0]?.type?.name} type2={memoizedPokemonDetails?.types[1]?.type?.name} resist={true} weak={false} />
            </ResistanceContainer>
            <GenerationContainer>
              <ResistanceDescription>Generation</ResistanceDescription>
              <GenerationDescription>{memoizedPokemonDetails.id <= 151 ? '1' : '2'}</GenerationDescription>
            </GenerationContainer>
          </ElementContainer>
        </IndividualPokeContainer>
      );
    };
    
    export default PokemonCard;



