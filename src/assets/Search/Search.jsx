import React from "react";
import { SearchInput, SearchButton, SearchForm } from "./Search.styled"


function Search({ searchTerm, handleChange, handleSubmit }) {


    return (

        <SearchForm onSubmit={handleSubmit}>
            <SearchInput
                type="text"
                placeholder="Search for Pokémon..."
                value={searchTerm}
                onChange={handleChange}
            />
            <SearchButton>I choose you...</SearchButton>

        </SearchForm>
  
    )
}

export default Search;