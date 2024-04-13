import React from "react";
import { Title, HomeContainer, PokemonCatalog  } from "./Home.styled";
import Pokemon from "../Pokemon/Pokemon";
function Home () {
    return (
        <HomeContainer>
            <Title>Catalog of Pokemon</Title>
            <PokemonCatalog>
                <Pokemon/>
            </PokemonCatalog>
        </HomeContainer>
    )
}

export default Home;