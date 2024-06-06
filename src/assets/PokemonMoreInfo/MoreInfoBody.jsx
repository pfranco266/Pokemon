import React from "react";
import {BodyContainer, FlexColumnContainer } from "./MoreInfo.styled"
import Evolution from "./Evolution";
import About from "./About"
import { Title } from "../Home/Home.styled";
import Stats from "./Stats";

function MoreInfoBody ({memoPokemon}) {



    return (
        <BodyContainer>
           <FlexColumnContainer>
                <Title>Evolutions</Title>
                <Evolution memoPokemon={memoPokemon}/>
                <About memoPokemon={memoPokemon}/>
                <Stats memoPokemon={memoPokemon}/>
            </FlexColumnContainer>
        </BodyContainer>
    )
}

export default MoreInfoBody