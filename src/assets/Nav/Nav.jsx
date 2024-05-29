import React from "react";
import { Link, CartIcon } from "./Nav.styled";
import {NavContainer} from "./Nav.styled"




function Nav () {


    return (
        <NavContainer>
            <Link aria-label="Home" to='/'>Home </Link>
            <Link aria-label="Pokemon Cards" to="/pokemoncards">Pokemon Cards</Link>

            <Link aria-label="Cart" to="/cart">
            <CartIcon />
                
            </Link>
        </NavContainer>
    )
}

export default Nav;