import React from "react";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { Modal } from "../misc/Modal";
import { Navbar } from "../components/Navbar";
import { CartContainer } from "../cart/CartContainer";
import { CartActions, getCartItems } from "../global/CartSlice";

export const Main = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { error, isLoading, cartItems, amount, total } = 
        useAppSelector((state) => state.cart);
    const { isOpen } = useAppSelector((state) => state.modal);

    React.useEffect(() => {
        dispatch(CartActions.calculateTotals());
    }, [cartItems]);

    React.useEffect(() => {
        dispatch(getCartItems());
    }, []);

    if (error) return <h1>Error{error}</h1>;
    if (isLoading) return <h1>Loading...</h1>

    return (
        <React.Fragment>
            <Navbar />
            {isOpen && <Modal />}
            <CartContainer 
                
            />
        </React.Fragment>
    );
};



