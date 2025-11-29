import useRequest from "../../../hooks/userRequest";
import NoPhoneMsg from "../../no-phone-msg/NoPhoneMsg";
import ProductCard from "../../product-card/ProductCard";

export default function Smartphones() {
    const { data: phones } = useRequest('/phones?limit=0', [])
  
    return (
        <>
            {phones.length > 0
                ? phones.map(phone => <ProductCard key={phone._id} {...phone} />)
                : <NoPhoneMsg />}


        </>
    )
}