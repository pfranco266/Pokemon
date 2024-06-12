import React from "react";
import { Link, CartIcon, NavContainer, NavBar} from "./Nav.styled";




function Nav() {


    return (
        <NavContainer>
            <NavBar>
                <Link aria-label="Home" to='/pokemon'>Home </Link>
                <Link aria-label="Browse Pokemon" to="/pokemon/collection">Pokemon
                </Link>

                <Link aria-label="Pokemon Cards" to="/pokemon/pokemoncards">Pokemon Cards</Link>

                <Link aria-label="Cart" to="/cart">
                    <CartIcon />

                </Link>
            </NavBar>
        </NavContainer>
    )
}

export default Nav;