import React from "react";
import {EvolutionContainer} from "./MoreInfo.styled"


function Evolution({  memoPokemon }) {




    return (
       <EvolutionContainer>
            {memoPokemon.evolutionTree && 
            <div>
                <h3>{memoPokemon?.firstForm?.name}</h3>

            </div>
            }
       </EvolutionContainer>
    )
}

export default Evolution;
