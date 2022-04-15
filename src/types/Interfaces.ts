export interface IModal {
    isOpen: boolean
};

export interface IItem {
    id: string,
    title: string,
    price: string,
    img: string,
    amount: number
};

export interface ICartState {
    cartItems: IItem[],
    amount: number,
    total: number,
    isLoading: boolean,
    error: string | null
};



