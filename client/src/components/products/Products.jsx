import { NavLink, Outlet } from "react-router";
import NoPhoneMsg from "../no-phone-msg/NoPhoneMsg";

import './Products.css'

export default function Products() {
    return (
        <main className="products-page">
            <div className="container">
               
                <section className="catalog-intro">
                    <h1>Our Product Catalog</h1>
                    <p className="intro-description">
                        Explore our premium selection of smartphones and tablets. All devices
                        come with warranty and pass strict quality control checks.
                    </p>
                </section>

                   <div className="category-tabs">
                    <NavLink
                        to="smartphones"
                        className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}
                    >
                        Smartphones
                    </NavLink>
                    <NavLink
                        to="tablets"
                        className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}
                    >
                        Tablets
                    </NavLink>
                </div>
               
                <div className="products-grid">
                    <Outlet />
                    
                </div>
        

            </div>
        </main>
    );
}