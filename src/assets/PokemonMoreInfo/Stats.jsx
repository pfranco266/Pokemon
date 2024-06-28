import React from "react";
import { FlexColumnContainer } from "./MoreInfo.styled";
import { StatsGridContainer, MoreInfoSubtitle, StatsFlexContainer, StatsText, AttackIcon, DefenseIcon, SpecialAttackIcon, SpecialDefenseIcon, HealthIcon, SpeedIcon } from "./MoreInfo.styled";








function Stats({ memoPokemon }) {
    return (
        <FlexColumnContainer>
            <MoreInfoSubtitle>{memoPokemon.name} Stats</MoreInfoSubtitle>
            <h2>Total: {memoPokemon.stats.hp + memoPokemon.stats.attack + memoPokemon.stats.defense + memoPokemon.stats.specialAttack + memoPokemon.stats.specialDefense + memoPokemon.stats.speed} </h2>

            <StatsGridContainer> 
                <StatsFlexContainer>
                    <StatsText>HP</StatsText>
                    <HealthIcon />
                    <StatsText>{memoPokemon.stats.hp}</StatsText>
                </StatsFlexContainer>
                <StatsFlexContainer>
                    <StatsText>Attack</StatsText>
                    <AttackIcon />
                    <StatsText>{memoPokemon.stats.attack}</StatsText>
                </StatsFlexContainer>
                <StatsFlexContainer>
                    <StatsText>Defense</StatsText>
                    <DefenseIcon />
                    <StatsText>{memoPokemon.stats.defense}</StatsText>
                </StatsFlexContainer>
                <StatsFlexContainer>
                    <StatsText>Special Attack</StatsText>
                    <SpecialAttackIcon />
                    <StatsText>{memoPokemon.stats.specialAttack}</StatsText>
                </StatsFlexContainer>
                <StatsFlexContainer>
                    <StatsText>Special Defense</StatsText>
                    <SpecialDefenseIcon />
                    <StatsText>{memoPokemon.stats.specialDefense}</StatsText>
                </StatsFlexContainer>
                <StatsFlexContainer>
                    <StatsText>Speed</StatsText>
                    <SpeedIcon />
                    <StatsText>{memoPokemon.stats.speed}</StatsText>
                </StatsFlexContainer>

            </StatsGridContainer>
        </FlexColumnContainer>
    )
}

export default Stats;