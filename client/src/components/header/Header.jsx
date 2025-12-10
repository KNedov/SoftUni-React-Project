import { NavLink, useNavigate, } from 'react-router-dom';
import './Header.css'
import { useUserContext } from '../../contexts/UserContext'
import { useEffect, useState } from 'react';
import CartModal from '../cart-modal/CartModal';
export default function Header() {
    const { cart, setCart } = useUserContext()
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const { logoutHandler } = useUserContext()
    const [pendingLogout,usePendingLogout]=useState(false)

    useEffect(() => {
    }, [cart]);

    const toggleCart = () => setOpen(o => !o);
    const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    const updateCartItemQuantity = (id, op) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item._id !== id) return item;

                const currentQty = item.quantity || 1;
                const newQty = op === '+' ? currentQty + 1 : Math.max(currentQty - 1, 1);

                return { ...item, quantity: newQty };
            });
        });
    };

    const handleRemove = (id) => {
        setCart(prevCart => prevCart.filter(item => item._id !== id));
    }
    const handleLogout = async () => {
        try {
            usePendingLogout(true)
            await logoutHandler();
            navigate('/');
        } catch (err) {
            alert('Logout Problem!');
            navigate('/');
        }finally{
            usePendingLogout(false)
        }
    };


    const { isAuthenticated } = useUserContext()
    return (
        <header className="main-header">
            <div className="container">
                <div className="logo">
                    <NavLink to="/">
                        <h1>
                            Phone<span>Zone</span>
                        </h1>
                        <p>Your Mobile Technology Hub</p>
                    </NavLink>
                </div>
                <div className="header-actions">
                    {!isAuthenticated ?
                        <div className="auth-buttons" id="guest-actions">

                            <NavLink to="/login" className="btn btn-login">
                                <i className="fas fa-sign-in-alt" />
                                Login
                            </NavLink>
                            <NavLink to="/register" className="btn btn-register">
                                <i className="fas fa-user-plus" />
                                Register
                            </NavLink>
                        </div>
                        :
                        <div className="user-menu" id="user-actions">
                            <button onClick={toggleCart} className="btn btn-cart">
                                <i className="fas fa-shopping-cart" />
                                <span className="cart-count">{totalQuantity}</span>
                            </button>

                            <button disabled={pendingLogout} onClick={handleLogout} className="btn btn-logout">
                                <i className="fas fa-sign-out-alt" />
                                Logout {pendingLogout?'...':''}
                            </button>
                        </div>
                    }

                </div>
            </div>
            <nav className="primary-nav">
                <div className="container">
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => `${isActive ? 'active' : ''}`}>
                                <i className="fas fa-home" />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products/smartphones" className={({ isActive }) => ` ${isActive ? 'active' : ''}`} >
                                <i className="fas fa-mobile-alt" />
                                Products
                            </NavLink>
                        </li>
                        {isAuthenticated &&
                            <>
                                <li>
                                    <NavLink to="product/create" className={({ isActive }) => `${isActive ? 'active' : ''}`} >
                                        <i className="fas fa-plus-circle" />
                                        CreateProduct
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/my-products" className={({ isActive }) => `${isActive ? 'active' : ''}`} >
                                        <i className="fas fa-list" />
                                        MyProducts
                                    </NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
            <CartModal

                isOpen={open}
                onIncrease={updateCartItemQuantity}
                onDecrease={updateCartItemQuantity}
                onRemove={handleRemove}
                onToggle={toggleCart}
            />
        </header>
    );
}