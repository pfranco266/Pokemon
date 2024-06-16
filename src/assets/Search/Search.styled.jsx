import styled from 'styled-components';


export const SearchInput = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #007bff;
  }
`;


export const SearchButton = styled.button`
padding: 10px;
border: 2px solid #ccc;
border-radius: 5px;
font-size: 16px;
outline: none;
margin-left: 1em;
transition: border-color 0.3s ease;

&:focus {
  border-color: #007bff;
}

`