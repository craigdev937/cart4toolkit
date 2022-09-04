import React from "react";
import { useAppDispatch } from "../global/Hooks";
import { ICON } from "../misc/Icons";
import { CartActions } from "../global/CartSlice";
import { IItem } from "../types/Interfaces";

interface Props {
    item: IItem
};

export const CartItem = ({item}: Props) => {
    const dispatch = useAppDispatch();

    return (
        <article className="cart-item">
            <img src={item.img} alt="img" />
            <section>
                <h4>{item.title}</h4>
                <h4 className="item-price">${item.price}</h4>
                <button 
                    className="remove-btn"
                    onClick={() => {
                        dispatch(CartActions.removeItem(item.id));
                    }}
                    >
                </button>
            </section>
            <section>
                <button 
                    className="amount-btn"
                    onClick={() => {
                        dispatch(CartActions.increase(item.id));
                    }}
                    ><ICON.ChevronUp />
                </button>
                <p className="amount">{item.amount}</p>

                <button 
                    className="amount-btn"
                    onClick={() => {
                        if (item.amount === 1) {
                            dispatch(CartActions.removeItem(item.id));
                            return;
                        };
                        dispatch(CartActions.decrease(item.id));
                    }}
                    ><ICON.ChevronDown />
                </button>
            </section>
        </article>
    );
};


