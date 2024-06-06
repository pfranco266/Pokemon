import React from "react";
import {EvolutionChainSVG, EvolutionGridContainer, EvolutionItem, EvolutionName, EvolutionOuterContainer} from "./MoreInfo.styled"
import SinglePokeCard from "../Collection/SinglePokeCard";
import { BrowseContainer } from "../Collection/Browse.styled";

function Evolution({  memoPokemon }) {


   

    return (
       <BrowseContainer count={memoPokemon?.evolutions?.length}>
            {memoPokemon && memoPokemon?.evolutions?.map((poke, index) => {
                return (
                   
                        <SinglePokeCard index={poke.id}/>
                 
                )
            })}
         
       </BrowseContainer>
    )
}

export default Evolution;
