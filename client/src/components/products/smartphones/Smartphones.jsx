import useRequest from "../../../hooks/useRequest";
import ErrorDisplay from "../../error-display/ErrorDisplay";
import Loading from "../../loading/Loading";
import NoPhoneMsg from "../../no-phone-msg/NoPhoneMsg";
import ProductCardSkeleton from "../../product-card-skeleton/ProductCardSkeleton";
import ProductCard from "../../product-card/ProductCard";

export default function Smartphones() {
    const { data: phones, error, loading } = useRequest('/phones?limit=0', [])
  

    return (
        <>
            {loading && phones.length === 0 ? (
                
                Array.from({ length: 6 }).map((_, index) => (
                    <ProductCardSkeleton key={`skeleton-${index}`} />
                ))
            ) : error ? (
                <ErrorDisplay error={error} />
            ) : phones.length > 0 ? (
                phones.map((phone) => (
                    <ProductCard key={phone._id} {...phone} />
                ))
            ) : (
                <NoPhoneMsg />
            )}


        </>
    )
}