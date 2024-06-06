import React from "react";
import { FlexColumnContainer, AboutInfoContainer, AboutImgContainer, AboutTextContainer } from "./MoreInfo.styled";
import { AboutSVG } from "./MoreInfo.styled"
import { Title } from "../Home/Home.styled";


function About({ memoPokemon }) {

    console.log('this stupid shit', memoPokemon.description)
    return (
        <FlexColumnContainer>
            <Title>
                About {memoPokemon.name}
            </Title>
            <AboutInfoContainer>
                <AboutImgContainer>
                    <AboutSVG src={memoPokemon?.sprites?.showdown} alt={memoPokemon.name} />
                </AboutImgContainer>
                <AboutTextContainer>
                    <ul>
                        <li>
                        {memoPokemon.description}

                        </li>
                        <li>
                        {memoPokemon.description2}

                        </li>
                        <li>
                        {memoPokemon.description3}

                        </li>
                    </ul>

                </AboutTextContainer>

            </AboutInfoContainer>
        </FlexColumnContainer>
    )
}

export default About