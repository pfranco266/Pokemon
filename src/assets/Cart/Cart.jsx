import React, { useContext } from "react";
import { Title, Total } from "./Cart.styled";
import CartContext from "../../CartContext";
import PokemonCard from "../Pokemon/PokemonCard";

import { GridItems, PokemonGridItem, Price, PokemonGridContainer, AddToCart } from "../Pokemon/Pokemon.styled";

function Cart() {


    const { cart, setCart } = useContext(CartContext);


    const removeFromCart = (pokemon) => {
        console.log('cart', cart)
        console.log('poke', pokemon)
        setCart((prev) => {
            //find existing pokemon item, and see if it matches the cart index
            const existingItemIndex = prev.findIndex(item => item.index === pokemon.index);
            if (existingItemIndex !== -1) {
                const newCart = [...prev];
                const existingItem = newCart[existingItemIndex];
    
                if (existingItem.amount > 1) {
                    // If more than one, decrement the amount
                    newCart[existingItemIndex] = { ...existingItem, amount: existingItem.amount - 1 };
                } else {
                    // If it's the last one, remove it entirely from the cart
                    newCart.splice(existingItemIndex, 1);
                }
                return newCart;
            }
            // If we can't match the pokemon.index to the cart item.index, return
            return prev;
        });
    };



    return (
        <div>
            <Title>
                your cart
            </Title>
            <PokemonGridContainer>
                {cart && cart.length > 0 && (
                    cart.map((item) => (
                        <GridItems key={item.index}>

                            <PokemonGridItem >
                                <PokemonCard index={item.index} />
                            </PokemonGridItem>
                            <Price>$5.99 x {item.amount}</Price>
                            <AddToCart aria-label="Remove from cart" onClick={() => removeFromCart( item )}>
                                Remove from cart
                            </AddToCart>
                            <AddToCart aria-label="Remove from cart" onClick={() => removeFromCart( item )}>
                                Add More
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




