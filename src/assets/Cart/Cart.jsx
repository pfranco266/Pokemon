import React, { useContext } from "react";
import { Title, Container } from "./Cart.styled";
import CartContext from "../../CartContext";
import PokemonCard from "../Pokemon/PokemonCard";

import { GridItems, PokemonGridItem, Price, PokemonGridContainer } from "../Pokemon/Pokemon.styled";

function Cart() {


    const { cart } = useContext(CartContext);


    return (
        <div>
            <Title>
                your cart
            </Title>
            <PokemonGridContainer>
            {cart && cart.length > 0 && (
                cart.map((index) => (
                    <GridItems key={index}>

                        <PokemonGridItem >
                            <PokemonCard  index={index} />
                        </PokemonGridItem>
                        <Price>$5.99</Price>

                    </GridItems>
                ))
            )}
            </PokemonGridContainer>
        </div>
    );
};

export default Cart;


