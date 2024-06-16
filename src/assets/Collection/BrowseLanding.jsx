import React, {useState} from "react";
import Search from "../Search/Search";
import BrowsePokemon from "./BrowsePokemon";
import { HomeContainer } from "../Home/Home.styled";

import { useNavigate } from "react-router-dom";
import FilterPokemon from "./FilterPokemon";
import {SearchFilterContainer} from "./Browse.styled"

function BrowseLanding () {

    let navigate = useNavigate();


    const [searchTerm, setSearchTerm] = useState('')


    const [selectedOption, setSelectedOption] = useState('');

    function handleChange(event) {

        setSearchTerm(event.target.value.toLowerCase().toString());
      }

    


      function handleSubmit(event) {

            

        navigate(`/collection/${searchTerm}`);

      }

      console.log('layer1', selectedOption, typeof selectedOption)


    return (
        <HomeContainer>
          <SearchFilterContainer>
            <Search handleSubmit={handleSubmit} searchTerm={searchTerm} handleChange={handleChange}/>
            <FilterPokemon selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
            </SearchFilterContainer>
            <BrowsePokemon selectedOption={selectedOption}/>
        </HomeContainer>
    )
}

export default BrowseLanding