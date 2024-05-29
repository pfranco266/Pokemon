import React, { useContext } from "react";
import { Title, Total, TotalContainer } from "./Cart.styled";
import CartContext from "../../CartContext";
import PokemonCard from "../Pokemon/PokemonCard";

import { GridItems, PokemonGridItem, Price, PokemonGridContainer, AddToCart, ButtonContainer } from "../Pokemon/Pokemon.styled";

function Cart() {


    const { cart, setCart } = useContext(CartContext);

    const itemPrice = 5.99; // Price of each item


    console.log(typeof cart[0].amount)
    const totalBeforeTax = cart.reduce((total, item) => {
        return total + (itemPrice * item.amount);
    }, 0).toFixed(2);
    
    function calcTax(totalBeforeTax) {
        const taxRate = 0.09;
        const numericTotalBeforeTax = Number(totalBeforeTax); 
        return (numericTotalBeforeTax * taxRate).toFixed(2); 
    }
    
    const tax = calcTax(totalBeforeTax);
    

    
    // Calculate the total including tax
    function calcTotal(tax, totalBeforeTax) {
        const numericTax = Number(tax); 
        const numericTotalBeforeTax = Number(totalBeforeTax); 
        return (numericTax + numericTotalBeforeTax).toFixed(2);
    }
    
    const total = calcTotal(tax, totalBeforeTax);


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

    const addMore = (pokemonId) => {
        console.log(cart, pokemonId);
        return setCart(prev => {
            // Find the index of the pokemon in the cart
            const index = prev.findIndex(item => item.index === pokemonId.index);

            // If the pokemon is found, update its amount
            if (index !== -1) {
                return prev.map((item, i) =>
                    i === index ? { ...item, amount: item.amount + 1 } : item
                );
            }

            // If the pokemon is not found, add it to the cart with amount set to 1
            return [...prev, { ...pokemonId, amount: 1 }];
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

                            <ButtonContainer>
                                <AddToCart aria-label="Remove from cart" onClick={() => removeFromCart(item)}>
                                    Remove from cart
                                </AddToCart>
                                <AddToCart aria-label="Remove from cart" onClick={() => addMore(item)}>
                                    Add More
                                </AddToCart>
                            </ButtonContainer>



                        </GridItems>
                    ))
                )}
            </PokemonGridContainer>

            <TotalContainer>


                <Total>
                    Your sum total is: {totalBeforeTax}
                </Total>
                <Total>
                    Tax 9%: {tax}
                </Total>

                <Total>
                    Your final total is: {total}
                </Total>


            </TotalContainer>
        </div>
    );
};

export default Cart;




