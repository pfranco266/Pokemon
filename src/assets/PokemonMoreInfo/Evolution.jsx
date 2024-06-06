import React from "react";
import {EvolutionChainSVG, EvolutionGridContainer, EvolutionItem, EvolutionName, EvolutionOuterContainer} from "./MoreInfo.styled"
import SinglePokeCard from "../Collection/SinglePokeCard";

function Evolution({  memoPokemon }) {


   

    return (
       <EvolutionGridContainer count={memoPokemon?.evolutions?.length}>
            {memoPokemon && memoPokemon?.evolutions?.map((poke, index) => {
                return (
                    <EvolutionItem key={index}>
                        <EvolutionName>
                        <EvolutionChainSVG src={poke.sprite}/>
                        
                        {poke.name}
                        </EvolutionName>
                    </EvolutionItem>
                )
            })}
         
       </EvolutionGridContainer>
    )
}

export default Evolution;
