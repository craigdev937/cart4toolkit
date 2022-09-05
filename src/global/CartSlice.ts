import { createSlice, PayloadAction, 
    createAsyncThunk } from "@reduxjs/toolkit";
import { IItem, ICartState } from "../types/Interfaces";

const URL = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = 
createAsyncThunk<IItem[]>("cart/getCartItems", 
async () => {
    const res: Response = await fetch(URL);
    if (!res.ok) new Error(res.statusText);
    const data: IItem[] = await res.json();
    return [...data];
});

const initialState: ICartState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: false,
    error: null
};

const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload);
        },
        decrease: (state, action: PayloadAction<string>) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === action.payload);
            cartItem!.amount = cartItem!.amount - 1;
        },
        increase: (state, action: PayloadAction<string>) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === action.payload);
            cartItem!.amount = cartItem!.amount + 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                (total += item.amount) * (parseInt(item.price));
            });
            state.amount = amount;
            state.total = total;
        },
    },
    extraReducers: {
        [getCartItems.rejected.type]: (state, action) => {
            state.isLoading = false,
            state.error = action.payload
        },
        [getCartItems.pending.toString()]: (state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled.type]: 
        (state, action: PayloadAction<IItem[]>) => {
            state.isLoading = false,
            state.cartItems = action.payload
        },
    },
});

export const CartActions = CartSlice.actions;
export const CartReducer = CartSlice.reducer;



