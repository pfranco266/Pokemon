import React from "react";
import { Title, HomeContainer, Text, TextContainer, Pokemonlogo  } from "./Home.styled";
import pokemon from "../../../public/pokemon-23.svg";



function Home () {
    return (
       <HomeContainer>
        <Title><Pokemonlogo src={pokemon} alt="Pokemon Logo" /></Title>
        <TextContainer>
        <Text>Thanks for visiting my pokemon card collection. This started as react fetch practice, but I enjoyed the nostalgia of making cards, so I kept it.</Text>
        </TextContainer>
        <TextContainer>
        <Text> Hope you enjoy!</Text>
        </TextContainer>

        
       </HomeContainer>
    )
}

export default Home;