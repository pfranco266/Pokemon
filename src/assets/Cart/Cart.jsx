import React, { useContext } from "react";
import { Title, Total } from "./Cart.styled";
import CartContext from "../../CartContext";
import PokemonCard from "../Pokemon/PokemonCard";

import { GridItems, PokemonGridItem, Price, PokemonGridContainer, AddToCart } from "../Pokemon/Pokemon.styled";

function Cart() {


    const { cart, setCart } = useContext(CartContext);

    // function removeFromCart(index) {
    //     console.log(cart, index);
    //     return setCart((prev) => {
    //         return prev.filter(id => id !== index); // Change `===` to `!==` and add `return`
    //     });
    // }

    function removeFromCart(index) {
        return setCart(prev => {
            
        })
    }


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
                                <PokemonCard index={index} />
                            </PokemonGridItem>
                            <Price>$5.99</Price>
                            <AddToCart aria-label="Remove from cart" onClick={() => removeFromCart( index)}>
                                Remove from cart
                            </AddToCart>

                        </GridItems>
                    ))
                )}
            </PokemonGridContainer>
            <Total>

            </Total>
        </div>
    );
};

export default Cart;


