import styled from "styled-components";


export const PokemonGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 500px);  
  grid-auto-rows: 300px auto; 
  gap: 30px;
  justify-content: center; 
  @media(max-width: 700px) {
    grid-template-columns: repeat(1, 300px);
  }

  @media(max-width: 1000px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media(max-width: 1350px) {
    grid-template-columns: repeat(3, 300px);
  }

`;

