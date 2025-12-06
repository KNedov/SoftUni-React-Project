import NoPhoneMsg from "../no-phone-msg/NoPhoneMsg";
import ProductCard from "../product-card/ProductCard";
import './MyProducts.css'     
import {useUserContext} from "../../contexts/UserContext";
import useRequest from "../../hooks/useRequest";
import ProductCardSkeleton from "../product-card-skeleton/ProductCardSkeleton";
import ErrorDisplay from "../error-display/ErrorDisplay";


export default function MyProducts() {
    const{user}=useUserContext()
const { data: myPhones , loading, error} = useRequest(`/phones/my-phones/${user._id}`, [])



    return (
        <>
            <div className="my-phones">
                <h2>My Phones Collection</h2>
                <div className="container">
            <div className="phones-grid">
                        <>
            {loading && myPhones.length === 0 ? (
                
                Array.from({ length: 6 }).map((_, index) => (
                    <ProductCardSkeleton key={`skeleton-${index}`} />
                ))
            ) : error ? (
                <ErrorDisplay error={error} />
            ) : myPhones.length > 0 ? (
                myPhones.map((phone) => (
                    <ProductCard key={phone._id} {...phone} />
                ))
            ) : (
                <NoPhoneMsg />
            )}


        </>
            </div>
            
            </div>
            </div>
            
        </>
    )
}