import React, {useState, useEffect} from "react";
import { PreviousEvoSprite, PreviousEvolutionContainer } from "./Pokemon.styled";

function PreviousPokemon({prev}) {
        console.log('prev', prev)
    
        const [species, setSpecies] = useState({});


    async function fetchPreviousPoke(url) {

        try {
            const response = await fetch(url); //    https://pokeapi.co/api/v2/pokemon-species/16/
            const data = await response.json();
            console.log('dadata', data);
            setSpecies({...data})
        } catch (error) {
            console.log('the error: ', error.message)
        }
    
    }

    useEffect(()=> {
        fetchPreviousPoke(prev.url);
    }, [])

    return (
        <PreviousEvolutionContainer>
            {/* <PreviousEvoSprite /> */}
        </PreviousEvolutionContainer>
    )
}

export default PreviousPokemon

// initial: 
//     https://pokeapi.co/api/v2/pokemon/  which leads to: 

// species
// : 
// name
// : 
// "raticate"
// url
// : 
// "https://pokeapi.co/api/v2/pokemon-species/20/

//  species    https://pokeapi.co/api/v2/pokemon-species/6/ 

    // which leads to: 

    //
// evolves_from_species
// : 
// name
// : 
// "kakuna"
// url
// : 
// "https://pokeapi.co/api/v2/pokemon-species/14/"
    //
    //
    //
    //
    //
