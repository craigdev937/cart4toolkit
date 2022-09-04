import ReactDOM from "react-dom";
import { useAppDispatch } from "../global/Hooks";
import { ModalActions } from "../global/ModalSlice";
import { CartActions } from "../global/CartSlice";

export const Modal = (): React.ReactPortal => {
    const dispatch = useAppDispatch();
    return ReactDOM.createPortal(
        <main className="modal-container">
            <aside className="modal">
                <h4>Remove items from cart</h4>
                <section className="btn-container">
                    <button 
                        type="button"
                        className="btn confirm-btn"
                        onClick={() => {
                            dispatch(CartActions.clearCart());
                            dispatch(ModalActions.closeModal());
                        }}
                        >confirm
                    </button>
                    <button 
                        type="button"
                        className="btn clear-btn"
                        onClick={() => {
                            dispatch(ModalActions.closeModal());
                        }}
                    >cancel
                    </button>
                </section>
            </aside>
        </main>,
        document.getElementById("modal")!
    );
};


