import React from "react";
import {FooterContainer, FooterTextContainer, FooterIconContainer, SocialsIcons} from "./Footer.styled"
import linkedin from "../../../public/icons8-linkedin.svg"
import github from "../../../public/iconmonstr-github-1.svg"
import code from "../../../public/code-slash-svgrepo-com.svg"
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer () {


    return(
        <FooterContainer>
            <FooterTextContainer>
            All rights reserved. Made an implemented by Phil Franco, using React + Vite & Styled-Components. &#169;2024
            </FooterTextContainer>
            <FooterIconContainer>

                <Link to={'https://www.linkedin.com/in/philfranco/'}>
                <SocialsIcons src={linkedin} alt="LinkedIn Icon"/> 
                </Link>
                <Link to={'https://github.com/pfranco266/'}>
                <SocialsIcons src={github} alt="Github Icon"/> 
                </Link>
                <Link to={'https://pfranco266.github.io/Portfolio/'}>
                <SocialsIcons  src={code} alt="Portfolio Code"/> 
                </Link>

            </FooterIconContainer>
        </FooterContainer>
    )
}

export default Footer