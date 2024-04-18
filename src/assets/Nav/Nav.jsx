import React from "react";
import { Link } from "./Nav.styled";
import { MdOutlineShoppingCart } from "react-icons/md";
import {NavContainer} from "./Nav.styled"




function Nav () {


    return (
        <NavContainer>
            <Link to='/'>Home </Link>
            <Link to="/cart">
            <MdOutlineShoppingCart />
                
            </Link>
        </NavContainer>
    )
}

export default Nav;