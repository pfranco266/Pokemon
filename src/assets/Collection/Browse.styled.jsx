import styled from "styled-components";
import { LoadMore } from "../Pokemon/Pokemon.styled";
import { HomeContainer } from "../Home/Home.styled";

export const OuterContainer = styled(HomeContainer)`
  flex-direction: column;
  margin-bottom: 5rem;
`

export const BrowseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 500px);  
  grid-auto-rows: minmax(300px, auto); 
  justify-content: center; 
  @media(min-width: 700px) {
    grid-template-columns: repeat(1, 500px);
    gap: 30px;
  }

  @media(min-width: 1000px) {
    grid-template-columns: repeat(2, 500px);
  }

  @media(min-width: 1350px) {
    grid-template-columns: repeat(3, 500px);
  }
`;


