import { useUserContext } from "../../contexts/UserContext";
import "./CartModal.css";
import {toast} from 'react-toastify'

export default function CartModal({ isOpen, onIncrease, onDecrease, onRemove, onToggle }) {
    if (!isOpen) return null;

    const { cart,setCart } = useUserContext();
    const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
     const handleOrderFinish = () => {
    setCart([]);                         
    toast.success("Order completed successfully."); 

    setTimeout(() => {
      onToggle()              
    }, 1000);
  };
    return (
        <div className="cart-overlay" onClick={onToggle}>
            <div className="cart-dropdown" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onToggle}>Close</button>
                <h3 className="cart-title">Your Cart</h3>

                {cart.length === 0 ? (
                    <p className="empty-cart">Your cart is empty.</p>
                ) : (
                    cart.map(item => (
                        <div className="cart-item" key={item._id}>
                            <img src={item.image} alt={item.phoneName} className="cart-item-img" />
                            <div className="cart-item-info">
                                <h4>{item.phoneName}</h4>
                                <p className="price">{item.price} $</p>
                                <div className="cart-qty">
                                    <button onClick={() => onDecrease(item._id, '-')}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => onIncrease(item._id, '+')}>+</button>
                                </div>
                            </div>
                            <button className="remove-btn" onClick={() => onRemove(item._id)}>✖</button>
                        </div>
                    ))

                )}

                {cart.length > 0 && (


                    <>
                        <div className="cart-total">
                            <span>Total:</span>
                            <span className="sum">{total.toFixed(2)} $</span>
                        </div>
                        <button className="checkout-btn" onClick={handleOrderFinish}>
                            Checkout
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}


