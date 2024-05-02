import React from "react";
import { Link } from "./Nav.styled";
import { MdOutlineShoppingCart } from "react-icons/md";
import {NavContainer} from "./Nav.styled"




function Nav () {


    return (
        <NavContainer>
            <Link aria-label="Home" to='/'>Home </Link>
            <Link aria-label="Cart" to="/cart">
            <MdOutlineShoppingCart />
                
            </Link>
        </NavContainer>
    )
}

export default Nav;