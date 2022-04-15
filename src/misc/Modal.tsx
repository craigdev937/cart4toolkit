import { useAppDispatch } from "../global/Hooks";
import { closeModal } from "../global/ModalSlice";
import { clearCart } from "../global/CartSlice";

export const Modal = (): JSX.Element => {
    const dispatch = useAppDispatch();
    return (
        <main className="modal-container">
            <aside className="modal">
                <h4>Remove items from cart</h4>
                <section className="btn-container">
                    <button 
                        type="button"
                        className="btn confirm-btn"
                        onClick={() => {
                            dispatch(clearCart());
                            dispatch(closeModal());
                        }}
                        >confirm
                    </button>
                    <button 
                        type="button"
                        className="btn clear-btn"
                        onClick={() => {
                            dispatch(closeModal());
                        }}
                    >cancel
                    </button>
                </section>
            </aside>
        </main>
    );
};


