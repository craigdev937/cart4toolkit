import { configureStore } from "@reduxjs/toolkit";
import { ModalReducer } from "./ModalSlice";

export const RootReducer = configureStore({
    reducer: {
        modal: ModalReducer,
    },
});

export type RootState = ReturnType<typeof RootReducer.getState>;
export type AppDispatch = typeof RootReducer.dispatch;



