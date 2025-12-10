import NoPhoneMsg from "../no-phone-msg/NoPhoneMsg";
import ProductCard from "../product-card/ProductCard";
import './MyProducts.css'
import { useUserContext } from "../../contexts/UserContext";
import useRequest from "../../hooks/useRequest";

import Loading from "../loading/Loading";



export default function MyProducts() {
    const { user } = useUserContext()
    const { data: myPhones, loading } = useRequest(`/phones/my-phones/${user._id}`, [])



    return (
        <>
            <div className="my-phones">
                <h2>My Phones Collection</h2>
                <div className="container">
                    <div className="phones-grid">
                        <>
                            {loading && <Loading text={`Phones`} />}

                            {!loading && myPhones?.length === 0 && (<NoPhoneMsg />)}

                            {myPhones?.length > 0 && myPhones.map((phone) => (
                                <ProductCard key={phone._id} {...phone} />))}
                        </>
                    </div>

                </div>
            </div>

        </>
    )
}