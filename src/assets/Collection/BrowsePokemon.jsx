import React, {useEffect, useReducer, useState} from "react";
import {BrowseContainer, OuterBrowseContainer} from "./Browse.styled"
import { LoadMore } from "../Pokemon/Pokemon.styled";
import {fetchPokeList} from "../Reducers/pokeAPI";
import {pokeListReducer, initialPokeList} from "../Reducers/pokemonListReducer"
import SinglePokeCard from "./SinglePokeCard"


function BrowsePokemon() {

   

    const [ disableButton, setDisablebutton ] = useState(false)


const [pokemonList, pokeListDispatch] = useReducer(pokeListReducer, initialPokeList);


const fetchData = async (url) => {
    pokeListDispatch({ type: 'setLoading' });
    try {

        const { data } = await fetchPokeList(url);
        pokeListDispatch({
            type: 'setPokeList',
            payload: data
        });

    } catch (error) {
        pokeListDispatch({
            type: 'setError',
            payload: error.message
        });
    }
}


async function handleLoadMore() {
    pokeListDispatch({ type: 'setLoading' });
    
    try {
        if (pokemonList.list.length >= 251) {
            setDisablebutton(true);
            return;
        }
        await fetchData(pokemonList.nextUrl);

    } catch (error) {
        pokeListDispatch({
            type: 'setError',
            payload: error.message
        });
    }
}


useEffect(() => {


    fetchData(pokemonList.initialUrl);
    setDisablebutton(false);
}, []);

    return (

        <OuterBrowseContainer>


            <BrowseContainer>
               {pokemonList && pokemonList?.list?.map((poke, index) => {
                return (
                 
                        
                        <SinglePokeCard  key={index} index={index + 1} />
                   
                )
               })}
            </BrowseContainer>
            
               {!pokemonList.loading && pokemonList?.list.length < 251 && 
               <LoadMore disabled={disableButton} onClick={handleLoadMore}>
               Load more Pokemon
             </LoadMore>
            
             }

             {pokemonList?.list.length > 251 ? <h1>I only like the first 250ish Pokemon</h1> : null}


      
   
            
        </OuterBrowseContainer>
    )
}

export default BrowsePokemon;