import useRequest from "../../../hooks/useRequest";
import Loading from "../../loading/Loading";
import NoPhoneMsg from "../../no-phone-msg/NoPhoneMsg";
import ProductCard from "../../product-card/ProductCard";

export default function Smartphones() {
    const { data: phones, loading } = useRequest('/phones?limit=0', [])


    return (
        <>
            {loading && <Loading text="Phones" />}
            
            {!loading && phones?.length === 0 && <NoPhoneMsg />}

            {phones?.length > 0 && phones.map(phone => (
                <ProductCard key={phone._id} {...phone} />
            ))}
        </>
    )
}