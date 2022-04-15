import { createSlice } from "@reduxjs/toolkit";
import { IModal } from "../types/Interfaces";

const initialState: IModal = {
    isOpen: false
};

const ModalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
    },
});

export const ModalActions = ModalSlice.actions;
export const ModalReducer = ModalSlice.reducer;


