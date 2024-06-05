import React from "react";
import { Heading, HeaderTitleContainer, LandingSVG, PokemonTitle, PokeNumber, BackButton } from "./MoreInfo.styled";
import { IoMdArrowRoundBack } from "react-icons/io";



function MoreInfoHeading({ pokeId, memoPokemon }) {
    console.log(memoPokemon?.types[0]?.type?.name)

    function handleClick () {
        
    }

    return (
        <Heading type={memoPokemon?.types[0]?.type?.name}>
            <BackButton to="/pokemon" onClick={handleClick}>
            <IoMdArrowRoundBack />
            </BackButton>
                <HeaderTitleContainer>
                    <PokeNumber>
                         #{pokeId}
                    </PokeNumber>
              
                <PokemonTitle>
                    {memoPokemon.name}
                </PokemonTitle>


                </HeaderTitleContainer>

                    <LandingSVG src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`} alt={memoPokemon.name} />
            

              
                    
             
        </Heading>
    )
}
export default MoreInfoHeading