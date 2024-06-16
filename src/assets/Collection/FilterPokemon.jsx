import React, { useState } from "react";
import colorMap from "../Pokemon/colorMap";
import { ClearButton, StyledMdClear, FilterContainer, DropdownButtonContainer, StyledLabel, StyledSelect } from "./Browse.styled";
import { HomeContainer } from "../Home/Home.styled";

function FilterPokemon({ selectedOption, setSelectedOption }) {
    const [selected, setSelected] = useState(false);

    const arrOfPokeType = [];

    for (let [key, value] of Object.entries(colorMap)) {
        arrOfPokeType.push({
            type: {
                name: `${key}`,
            }
        });
    }

    const handleChange = (event) => {
        setSelectedOption(event.target.value.toString());
        setSelected(event.target.value !== '');
    };

    const handleClearSelection = () => {
        setSelectedOption('');
        setSelected(false);
    };

    return (
        <HomeContainer>
            <StyledLabel htmlFor="Dropdown">Filter Pokemon by type: </StyledLabel>
            <DropdownButtonContainer>
                <StyledSelect id="Dropdown" value={selectedOption} onChange={handleChange}>
                    <option value={''}>Select an option</option>
                    {arrOfPokeType.length > 0 && arrOfPokeType.map((type, index) => (
                        <option key={index} value={type.type.name}>{type.type.name}</option>
                    ))}
                </StyledSelect>
                <ClearButton
                    onClick={handleClearSelection}
                    style={{ visibility: selected ? 'visible' : 'hidden' }}
                >
                    <StyledMdClear />
                </ClearButton>
            </DropdownButtonContainer>
        </HomeContainer>
    );
}

export default FilterPokemon;
