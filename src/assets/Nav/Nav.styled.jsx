import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";


export const NavContainer = styled.nav`
position: fixed; /* Fixed at the top */
top: 0; /* Align top edge */
left: 0; /* Stretch across the top */
width: 100%; /* Full width */
background: #333; /* Dark background */
color: #fff; /* White text */
padding: 10px 20px; /* Some padding */
box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Soft shadow for depth */
z-index: 1000; /* Ensure it's above other content */
display: flex;
justify-content: space-evenly;
`
export const Link = styled(RouterLink)`
    color: white;
    
`
export const CartIcon = styled(MdOutlineShoppingCart)`
    height: 1.5em;
    width: 1.5em;
`