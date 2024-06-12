import React, {useState} from "react";
import Search from "../Search/Search";
import BrowsePokemon from "./BrowsePokemon";
import { HomeContainer } from "../Home/Home.styled";

import { useNavigate } from "react-router-dom";

function BrowseLanding () {

    let navigate = useNavigate();


    const [searchTerm, setSearchTerm] = useState('')

    function handleChange(event) {

        setSearchTerm(event.target.value.toLowerCase());
      }

    


      function handleSubmit(event) {

            
        console.log(searchTerm, event)

        navigate(`/pokemon/${searchTerm}`);

      }


    return (
        <HomeContainer>
            <Search handleSubmit={handleSubmit} searchTerm={searchTerm} handleChange={handleChange}/>
            <BrowsePokemon/>
        </HomeContainer>
    )
}

export default BrowseLanding