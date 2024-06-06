import React from "react";
import {BodyContainer } from "./MoreInfo.styled"
import Evolution from "./Evolution";

function MoreInfoBody ({memoPokemon}) {



    return (
        <BodyContainer>
            <Evolution memoPokemon={memoPokemon}/>

         
        </BodyContainer>
    )
}

export default MoreInfoBody