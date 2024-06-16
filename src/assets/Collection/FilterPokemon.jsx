import React, { useState } from "react";
import colorMap from "../Pokemon/colorMap";
import {ClearButton, StyledMdClear, FilterContainer, StyledLabel} from "./Browse.styled"

import { HomeContainer } from "../Home/Home.styled";



function FilterPokemon({ selectedOption, setSelectedOption }) {

    const [selected, setSelected] = useState(false)

    const arrOfPokeType = [];

    for (let [key, value] of Object.entries(colorMap)) {
        arrOfPokeType.push({
            type: {
                name: `${key}`,
              
            }
        })
    }

    const handleChange = (event) => {
        setSelectedOption(event.target.value.toString());
        setSelected(true)
    };

    const handleClearSelection = () => {
        setSelectedOption('')

        setSelected(false)

    }

    console.log('layer2', selectedOption, typeof selectedOption)

    return (

        <HomeContainer>

        

            <StyledLabel htmlFor="Dropdown">Filter Pokemon by type: </StyledLabel>
            <select id="Dropdown" value={selectedOption} onChange={handleChange}>
                <option value={''}>Select an option</option>
                {arrOfPokeType.length > 0 && arrOfPokeType.map((type, index) => {
                    return (
                        <option key={index} value={type.type.name}>{type.type.name} {type.type.icon}</option>
                    )
                })}
                <option value={'mythical'}>mythical</option>
                <option value={'legendary'}>legendary</option>
            </select>
            {
                selected && <ClearButton onClick={handleClearSelection}><StyledMdClear/> </ClearButton>

            }
        </HomeContainer>
     
    )
}

export default FilterPokemon