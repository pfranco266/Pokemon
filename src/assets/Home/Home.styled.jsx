import styled from "styled-components";

export const Title = styled.h1`
margin: 1em 0px;
text-align: center;
font-size: 2em; 
color: rgba(255, 255, 255, 0.87);
text-transform: capitalize;
`

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media(max-width: 600px) {
    margin-bottom: 5vh;
}
`

export const PokemonCatalog = styled.section`
 
    
`

export const Text = styled.p`
    font-size: 2em;

`
export const TextContainer = styled.div`
    display: flex;
    width: 70%;
    height: 60%;
    margin: auto;
`
export const Pokemonlogo = styled.img`
    width: 8em; 
    height: 8em;
`