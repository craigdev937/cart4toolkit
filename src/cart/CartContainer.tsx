import React from "react";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { ModalActions } from "../global/ModalSlice";
import { CartItem } from "./CartItem";

export const CartContainer = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { cartItems, total, amount } = 
    useAppSelector((state) => state.cart);

    if (amount < 1) {
        return (
            <section className="cart">
                <header><h2>your bag</h2></header>
                <h4 className="empty-cart"
                    >is currently empty
                </h4>
            </section>
        );
    };

    return (
        <React.Fragment>
            <section className="cart">
                <header><h2>your bag</h2></header>
                <main>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </main>
                <footer>
                    <hr />
                    <aside className="cart-total">
                        <h4>total
                            <span>${total.toFixed(2)}</span>
                        </h4>
                    </aside>
                    <button 
                        className="btn clear-btn"
                        onClick={() => 
                            dispatch(ModalActions.openModal())}
                        >clear cart
                    </button>
                </footer>
            </section>
        </React.Fragment>
    );
};


