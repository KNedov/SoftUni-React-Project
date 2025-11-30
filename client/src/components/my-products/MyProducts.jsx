import NoPhoneMsg from "../no-phone-msg/NoPhoneMsg";
import ProductCard from "../product-card/ProductCard";
import './MyProducts.css'     
import {useUserContext} from "../../contexts/UserContext";
import useRequest from "../../hooks/userRequest";


export default function MyProducts() {
    const{user}=useUserContext()
const { data: myPhones } = useRequest(`/phones/my-phones/${user._id}`, [])



    return (
        <>
            <div className="my-phones">
                <h2>My Phones Collection</h2>
                <div className="container">
            <div className="phones-grid">
                {myPhones.length>0
                ? myPhones.map((myPhone)=>{
                    return <ProductCard key={myPhone._id} {...myPhone}/>
                })
                :<NoPhoneMsg/>
                }
            </div>
            
            </div>
            </div>
            
        </>
    )
}