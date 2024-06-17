import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";



export const NavContainer = styled.div`
width: 100%; 
height: 100%;
background: #333; /* Dark background */
color: #fff; /* White text */
box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Soft shadow for depth */
display: flex;
justify-content: space-evenly;
border-bottom: 2px solid yellow;
@media(min-width: 2000px) {
    width: 100%; 
    height: 5em;
}
`

export const NavBar = styled.nav`

width: 100%;
background: #333; 
color: #fff; 
box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Soft shadow for depth */
z-index: 1000; /* Ensure it's above other content */
display: flex;
justify-content: space-evenly;
`
export const Link = styled(RouterLink)`
    color: white;
    font-weight: bold;
    text-decoration: none;
    padding: 10px;
font-size: 1.25em;
outline: none;


    @media(min-width: 2000px) {
        font-size:  2em;
    }
    &:hover{
        background: #444; 
        border-radius: 10px;
        text-decoration: underline;

    }
    
`
export const CartIcon = styled(MdOutlineShoppingCart)`
    height: 1.5em;
    width: 1.5em;
`

