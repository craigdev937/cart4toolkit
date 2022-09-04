import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { ModalReducer } from "./ModalSlice";
import { CartReducer } from "./CartSlice";

export const RootReducer = configureStore({
    reducer: {
        modal: ModalReducer,
        cart: CartReducer,
    },
});

export type RootState = ReturnType<typeof RootReducer.getState>;
export type AppDispatch = typeof RootReducer.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


