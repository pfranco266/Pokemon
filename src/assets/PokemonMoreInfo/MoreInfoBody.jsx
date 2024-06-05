import React from "react";
import {BodyContainer } from "./MoreInfo.styled"


function MoreInfoBody ({memoPokemon}) {



    return (
        <BodyContainer>
            {memoPokemon.name}
        </BodyContainer>
    )
}

export default MoreInfoBody