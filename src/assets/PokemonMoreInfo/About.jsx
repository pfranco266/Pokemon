import React from "react";
import { FlexColumnContainer, AboutInfoContainer, AboutImgContainer, AboutTextContainer } from "./MoreInfo.styled";
import { AboutSVG } from "./MoreInfo.styled"
import { Title } from "../Home/Home.styled";


function About({ memoPokemon }) {
    return (
        <FlexColumnContainer>
            <Title>
                About {memoPokemon.name}
            </Title>
            <AboutInfoContainer>
                <AboutImgContainer>
                    <AboutSVG src={memoPokemon?.sprites?.default} alt={memoPokemon.name} />
                </AboutImgContainer>
                <AboutTextContainer>
                    {memoPokemon.description}
                </AboutTextContainer>

            </AboutInfoContainer>
        </FlexColumnContainer>
    )
}

export default About