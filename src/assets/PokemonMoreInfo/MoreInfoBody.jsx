import React from "react";
import {BodyContainer, FlexColumnContainer } from "./MoreInfo.styled"
import Evolution from "./Evolution";
import About from "./About"
import { Title } from "../Home/Home.styled";

function MoreInfoBody ({memoPokemon}) {



    return (
        <BodyContainer>
           <FlexColumnContainer>
                <Title>Evolutions</Title>
                <Evolution memoPokemon={memoPokemon}/>
                <About memoPokemon={memoPokemon}/>
            </FlexColumnContainer>
        </BodyContainer>
    )
}

export default MoreInfoBody