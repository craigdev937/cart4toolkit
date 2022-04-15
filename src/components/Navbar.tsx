import React from "react";
import { useAppSelector } from "../global/Hooks";
import { ICON } from "../misc/Icons";

export const Navbar = (): JSX.Element => {
    const { amount } = useAppSelector((state) => state.cart);
    return (
        <React.Fragment>
            <nav>
                <main className="nav-center">
                    <h3>Shopping Cart</h3>
                    <aside className="nav-container">
                        <ICON.CartIcon />
                        <div className="amount-container">
                            <p className="total-amount">{amount}</p>
                        </div>
                    </aside>
                </main>
            </nav>
        </React.Fragment>
    );
};


