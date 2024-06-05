const initialPokeDetails = {
    id: null,
    legendary: false,
    mythical: false,
    name: '',
    height: null,
    weight: null,
    sprites: {
        default: '',
        backDefault: '',
        frontShiny: '',
        backShiny: ''
    },
    stats: {
        hp: null,
        attack: null,
        defense: null,
        specialAttack: null,
        specialDefense: null,
        speed: null
    },
    species: {},
    types: [],
    moves: [],
    evolutionTree: {},
    description: [],
    error: null

};

function pokemonReducer(state, action) {
    switch (action.type) {
        case 'setPokemonDetails':
            const { pokemonDetailData, pokemonSpeciesData, evolutionData } = action.payload;
                // console.log(pokemonDetailData.name, 'next', evolutionData.chain.evolves_to[0]?.species?.name)
                console.log(pokemonDetailData.name, 'first evo', evolutionData, 'next', evolutionData.chain.species)


            return {
                ...state,
                id: pokemonDetailData.id,
                legendary: pokemonSpeciesData.is_legendary,
                mythical: pokemonSpeciesData.is_mythical,
                name: pokemonDetailData.name,
                height: pokemonDetailData.height / 10,
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
                evolutions: [

                ],
                
                firstForm: {
                    name: evolutionData?.chain?.species?.name || null,  //this looks right
                    id: evolutionData?.chain?.species?.id || null,
                    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${evolutionData?.chain?.species?.id}.svg`|| null, 
                },
                secondForm: {
                    name: evolutionData?.chain?.evolves_to[0]?.species?.name || null, 
                    id: evolutionData?.chain?.evolves_to[0]?.species?.id || null,
                    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${evolutionData?.chain.evolves_to[0]?.species?.id}.svg` || null,
                },
                thirdForm: {
                    name: evolutionData?.chain?.evolves_to[0]?.evolves_to[0]?.species?.name || null,  //this looks right
                    id: evolutionData?.chain.evolves_to[0]?.evolves_to[0]?.species?.id  || null,
                    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${evolutionData?.chain?.evolves_to[0]?.evolves_to[0]?.species?.id}.svg` || null,
                },
                species: evolutionData,
                types: pokemonDetailData.types,
                moves: pokemonDetailData.moves,
                evolutionTree: evolutionData,
                description: pokemonSpeciesData.flavor_text_entries.slice(0, 5).map(entry => entry.flavor_text)
            };

 
                           // console.log(pokemonDetailData)
            // console.log(pokemonSpeciesData.evolution_chain) //{url: 'https://pokeapi.co/api/v2/evolution-chain/15/'}
            // console.log(pokemonSpeciesData.name, evolutionData) //use these to see pokemon that evolves to who
            //for previous evolution, calling from ivysaur, give bulbasaur: evolutionData.evolvesFrom.name || id
            // for next evolution:calling from bulbasaur, give iveysaur: evolutionData.chain.evolves_to[0].species.name
            // for final evolution calling from bulbasaur, gives venasaur: evolutionData.chain.evolves_to[0].evolves_to[0].species
  
                  
        case 'setError':
            return {
                ...state,
                error: action.payload 
            };
        default:
            return state;
    }
};

export {initialPokeDetails, pokemonReducer};




// pokemonDetailData gives 



