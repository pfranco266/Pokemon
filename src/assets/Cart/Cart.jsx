import React, { useContext } from "react";
import { Title, Total } from "./Cart.styled";
import CartContext from "../../CartContext";
import PokemonCard from "../Pokemon/PokemonCard";
import colorMap from "../Pokemon/colorMap";

import { GridItems, PokemonGridItem, Price, PokemonGridContainer, AddToCart } from "../Pokemon/Pokemon.styled";

function Cart() {


    const { cart, setCart } = useContext(CartContext);





    function removeFromCart(index) {
        console.log(cart, index);
        return setCart((prev) => {
            return prev.filter(id => id !== index); // Change `===` to `!==` and add `return`
        });
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




//this messes up the indexing of the pokemon catalogue 


// function removeFromCart(index) {
//     console.log(index, cart);
//     return setCart((prev) => {
//         const pos = prev.findIndex(id => id === index); // Find the position of the first item matching the index
//         if (pos !== -1) {
//             return [...prev.slice(0, pos), ...prev.slice(pos + 1)]; // Remove the item at position `pos`
//         }
//         return prev; // Return the original array if no item is found
//     });
// }