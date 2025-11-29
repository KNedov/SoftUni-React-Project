import NoPhoneMsg from "../no-phone-msg/NoPhoneMsg";
import ProductCard from "../product-card/ProductCard";
import './MyProducts.css'

export default function MyProducts() {
    return (
        <>
            <div className="my-phones">
                <h2>My Phones Collection</h2>
                <div className="container">
            <div className="phones-grid">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <NoPhoneMsg/>
            </div>
            </div>
            
        </>
    )
}