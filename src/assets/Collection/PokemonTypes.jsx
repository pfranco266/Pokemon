import React from "react";
import {TypesContainer, Types} from "./Browse.styled"
import colorMap from "../Pokemon/colorMap";


function PokemonTypes({ types }) {

    return (
        <TypesContainer>
        {types && types.map((type) => {
          const Icon = colorMap[type.type.name]?.icon;
          return (
            <Types type={type.type.name} key={type.type.name}>
              {Icon && <Icon />} {type.type.name}
            </Types>
          );
        })}
      </TypesContainer>
    );
  }
  
  export default PokemonTypes;