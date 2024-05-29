import React, { useContext } from "react";
import { Title, Total, TotalContainer } from "./Cart.styled";
import CartContext from "../../CartContext";
import PokemonCard from "../Pokemon/PokemonCard";
import { GridItems, PokemonGridItem, Price, PokemonGridContainer, AddToCart, ButtonContainer } from "../Pokemon/Pokemon.styled";
import { Link } from "react-router-dom";

function Cart() {
    const { cart, setCart } = useContext(CartContext);
    const itemPrice = 5.99; 

    const totalBeforeTax = cart.reduce((total, item) => {
        return total + (itemPrice * item.amount);
    }, 0).toFixed(2);

    function calcTax(totalBeforeTax) {
        const taxRate = 0.09;
        const numericTotalBeforeTax = Number(totalBeforeTax); 
        return (numericTotalBeforeTax * taxRate).toFixed(2); 
    }

    const tax = calcTax(totalBeforeTax);

    function calcTotal(tax, totalBeforeTax) {
        const numericTax = Number(tax); 
        const numericTotalBeforeTax = Number(totalBeforeTax); 
        return (numericTax + numericTotalBeforeTax).toFixed(2);
    }

    const total = calcTotal(tax, totalBeforeTax);

    const removeFromCart = (pokemon) => {
        setCart((prev) => {
            const existingItemIndex = prev.findIndex(item => item.index === pokemon.index);
            if (existingItemIndex !== -1) {
                const newCart = [...prev];
                const existingItem = newCart[existingItemIndex];

                if (existingItem.amount > 1) {
                    newCart[existingItemIndex] = { ...existingItem, amount: existingItem.amount - 1 };
                } else {
                    newCart.splice(existingItemIndex, 1);
                }

                return newCart;
            }
            return prev;
        });
    };

    const addMore = (pokemonId) => {
        return setCart(prev => {
            const index = prev.findIndex(item => item.index === pokemonId.index);
            if (index !== -1) {
                return prev.map((item, i) =>
                    i === index ? { ...item, amount: item.amount + 1 } : item
                );
            }

            return [...prev, { ...pokemonId, amount: 1 }];
        });
    };

    return (
        <div>
            <Title>
                Shopping Cart
            </Title>
            <Title>
                {cart.length > 0 ? `You have ${cart.length} Pokemon in your cart` : `Your cart is empty.`}
            </Title>
             <Title>
                {cart.length === 0 ? <Link to={'/pokemoncards'}>See our Pokemon Card Selection</Link> : null}
            </Title>
            <PokemonGridContainer>
                {cart.length > 0 && (
                    cart.map((item) => (
                        <GridItems key={item.index}>
                            <PokemonGridItem>
                                <PokemonCard index={item.index} />
                            </PokemonGridItem>
                            <Price>$5.99 x {item.amount}</Price>
                            <ButtonContainer>
                                <AddToCart aria-label="Remove from cart" onClick={() => removeFromCart(item)}>
                                    Remove from cart
                                </AddToCart>
                                <AddToCart aria-label="Add more" onClick={() => addMore(item)}>
                                    Add More
                                </AddToCart>
                            </ButtonContainer>
                        </GridItems>
                    ))
                )}
            </PokemonGridContainer>

            {cart.length > 0 && (
                <TotalContainer>
                    <Total>Your sum total is: ${totalBeforeTax}</Total>
                    <Total>Tax 9%: ${tax}</Total>
                    <Total>Your final total is: ${total}</Total>
                </TotalContainer>
            )}
        </div>
    );
}

export default Cart;
