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
  @media(max-width: 768px) {
    font-size: 14px;
    width: 80%;
  }
`;


export const SearchButton = styled.button`
padding: 10px;
border: 4px solid #3b4cca;
background-color: #ffcc00;
color: #3b4cca;
border-radius: 5px;
font-size: 16px;
font-weight: bold;
outline: none;
margin-left: 1em;
transition: border-color 0.3s ease;

&:focus {
  border-color: #007bff;
}
&: hover{
  cursor: pointer;
}

@media(max-width: 768px) {
  font-size: 14px;
  padding: 8px;
  margin-left: 0;

}

`


export const SearchForm = styled.form`
display: flex;
@media(max-width: 768px) {
  flex-direction: column;
  gap: 5px;
  align-items: center;


}
`


