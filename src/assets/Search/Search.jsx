import React from "react";
import { SearchInput, SearchButton } from "./Search.styled"
import { HomeContainer } from "../Home/Home.styled";


function Search({ searchTerm, handleChange, handleSubmit }) {


    return (

        <form onSubmit={handleSubmit}>
            <SearchInput
                type="text"
                placeholder="Search for Pokémon..."
                value={searchTerm}
                onChange={handleChange}
            />
            <SearchButton>I choose you...</SearchButton>

        </form>
  
    )
}

export default Search;