import {Link, NavLink } from 'react-router';
import './Header.css'
export default function Header() {

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
                    <div className="user-menu" id="user-actions">
                        <Link to="/cart" className="btn btn-cart">
                            <i className="fas fa-shopping-cart" />
                            <span className="cart-count">0</span>
                        </Link>
                        <Link to="/logout" className="btn btn-logout">
                            <i className="fas fa-sign-out-alt" />
                            Logout
                        </Link>
                    </div>
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
                    </ul>
                </div>
            </nav>
        </header>
    );
}