import React from "react";
import { Title, HomeContainer, Text, TextContainer  } from "./Home.styled";
function Home () {
    return (
       <HomeContainer>
        <Title>I am home</Title>
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