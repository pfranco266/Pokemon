import React from "react";
import { Link } from "./Nav.styled";


import {NavContainer} from "./Nav.styled"

function Nav () {
    return (
        <NavContainer>
            <Link to='/'>Home </Link>
            <Link to="/cart">Cart</Link>
        </NavContainer>
    )
}

export default Nav;