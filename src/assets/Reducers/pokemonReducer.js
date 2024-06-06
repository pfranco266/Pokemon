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
        
        // Extract evolution chain
        const extractEvolutions = (chain) => {
          const evolutions = [];
          let current = chain;
          while (current) {
            evolutions.push({
              name: current.species.name,
              id: current.species.url.split('/').filter(Boolean).pop(),
              sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${current.species.url.split('/').filter(Boolean).pop()}.svg`
            });
            current = current.evolves_to[0];
          }
          return evolutions;
        };
  
        const evolutions = extractEvolutions(evolutionData.chain);
  
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
            showdown: pokemonDetailData.sprites.other.showdown.front_default, 
            home: pokemonDetailData.sprites.other.home.front_default,
            

          },
          stats: {
            hp: pokemonDetailData.stats[0].base_stat,
            attack: pokemonDetailData.stats[1].base_stat,
            defense: pokemonDetailData.stats[2].base_stat,
            specialAttack: pokemonDetailData.stats[3].base_stat,
            specialDefense: pokemonDetailData.stats[4].base_stat,
            speed: pokemonDetailData.stats[5].base_stat,
          },
          evolutions,
          species: evolutionData,
          types: pokemonDetailData.types,
          moves: pokemonDetailData.moves,
          evolutionTree: evolutionData,
          description: pokemonSpeciesData.flavor_text_entries[0].flavor_text,
          description2: pokemonSpeciesData.flavor_text_entries[2].flavor_text,
          description3: pokemonSpeciesData.flavor_text_entries[3].flavor_text,


          error: '',
        };
  
      case 'setError':
        return {
          ...state,
          error: action.payload,
        };
  
      default:
        return state;
    }
  }
  
  

export {initialPokeDetails, pokemonReducer};




// pokemonDetailData gives 



