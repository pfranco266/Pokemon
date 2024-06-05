import styled from "styled-components";
import colorMap from "../Pokemon/colorMap";
import { Link } from 'react-router-dom';


export const Heading = styled.header`
display: flex;
justify-content: space-evenly;
height: 50vh;
position: relative;
border-bottom-left-radius: 40px;
border-bottom-right-radius: 40px;
background-color: ${({ type }) => {
    console.log(type)
    return colorMap[type]?.color
  }};
`



export const OpenPokeballImage = styled.img`
display: none;
    width: 5em; 
    height: 7em;
    transform: rotate(-90deg)
`

export const EvolutionContainer = styled.div`
display: flex; 
justify-content: center;

`

export const PokemonTitle = styled.h1`
text-transform: capitalize;
font-size: 5em;

`
export const EvolutionChainSVG = styled.img`
    width: 5em; 
    height: 7em;
   
`

export const HeaderTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em 0;
`

export const LandingSVG = styled.img`
transform: scaleX(-1);
  padding: 2em 0;
    @media(max-width: 1130px) {

    }
`


export const PokeNumber = styled.span`
font-size: 3em;
opacity: .7;
font-weight: bold;
`

export const BackButton = styled(Link)`
    font-size: 2em;
    background: none;
    border: none;
    color: white;
    font-weight: bold;
    position: absolute;
    top: 2%;
    left: 2%;
    cursor: pointer;
`


export const BodyContainer = styled.main`
    display: flex;

    height: 100vh;
`