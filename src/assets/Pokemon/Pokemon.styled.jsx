import styled from "styled-components";
import colorMap from './colorMap';



export const PokemonGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px); /* Creates 3 columns */
  grid-auto-rows: 400px;
  gap: 30px;
  justify-content: center; /* Center the grid horizontally */
  padding: 20px; /* Add some padding around the grid */
  @media(max-width: 1350px) {
    grid-template-columns: repeat(3, 300px);
  }
  @media(max-width: 1000px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media(max-width: 700px) {
    grid-template-columns: repeat(1, 300px);
  }
`;

export const PokeContainer = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const PokemonGridItem = styled.h4`

    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: top;
    background-color: #f0f0f0;
    color: #333;
    border-radius: 8px;
    border: 10px solid gold;

  
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`



export const LoadMore = styled.button`

`

export const HitPoints = styled.div`
  position: absolute;
  right: 1%;
  top: 0%;
`

export const Name = styled.div`
  display: flex;
`

export const SpriteContainer = styled.div`
  display: flex; 
  justify-content: center;
  width: 70%;
  height: 50%;
  border: 5px solid gold;
  background-color: ${({ backgroundType }) => colorMap[backgroundType]};

`

export const Sprite = styled.img`
  border: 1px solid silver;
  width: 100%;
`

export const InfoContainer = styled.div`
display: inline;
`


export const PokeType = styled.div`
  background-color: ${({ type }) => colorMap[type.type.name]};
  font-size: 9px;
  display: inline;
`;

export const PokeHeightWeight = styled.span`
  font-size: 8px;
`

export const PreviousEvoSprite = styled.img`
  width: 50px;
  height: 50px;
`

export const PreviousEvolutionContainer = styled.div`
  display: flex; 
  justify-content: center;
  width: 15%;
  height: 15%;
  top: 1%;
  left: 1%;
  position: absolute;
  border: 2px solid gold;
  background-color: ${({ backgroundType }) => colorMap[backgroundType]};

`


export const MovesContainer = styled.div`
  display: flex;
  flex-direction: column;
`