import { configureStore } from "@reduxjs/toolkit";

export const RootReducer = configureStore({
    reducer: {
        cart: () => "Redux-Toolkit Cart!"
    },
});

export type RootState = ReturnType<typeof RootReducer.getState>;
export type AppDispatch = typeof RootReducer.dispatch;



