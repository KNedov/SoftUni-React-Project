import { Link, useParams } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import useRequest from '../../hooks/useRequest';
import './Details.css'
import { useNavigate } from "react-router-dom";

import DetailsCommentsSection from "./details-comments-section/DetailsCommentsSection";
import DetailsPhoneContent from './details-phone-content/DetailsPhoneContent';
import useIsOwner from '../../hooks/useIsOwner';
import Delete from '../delete/Delete';
import { useState } from 'react';
import Loading from '../loading/Loading';


export default function Details() {
    const { isAuthenticated,user,setCart} = useUserContext();
    const navigate = useNavigate()
    const { productId } = useParams()
    const { data: phone,loading } = useRequest(`/phones/${productId}`,[] )
    

    
    
    const isOwner = useIsOwner(phone.userId)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

   const handleBuy = () => {
    setCart(prevCart => {
        const cart = prevCart || [];

        const existingItem = cart.find(item => item._id === phone._id);

        if (existingItem) {
            return cart.map(item =>
                item._id === phone._id
                    ? { ...item, quantity: (item.quantity || 1) + 1}
                    : item
            );
        }

        return [...cart, { ...phone, quantity: 1 }];
    });
};
    
    return (

        <>
            <div className="container">

                <div className="phone-card">
                    <div className="phone-header">
                        <button onClick={() => navigate(-1)} className="back-btn" >
                            <i className="fas fa-arrow-left"></i>
                            Back
                        </button>
                        <h1 className="phone-title">{phone.phoneName}</h1>

                        {isAuthenticated && isOwner &&
                            <div className="actions">
                                <Link to={`/${phone._id}/edit`}

                                    className="action-btn"
                                >
                                    <i className="fas fa-pencil-alt"></i>
                                </Link>
                                <button
                                    onClick= {()=>setIsDeleteOpen(!isDeleteOpen)}
                                    className="action-btn delete"
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                                
                            </div>
                        }

                    </div>

                                {isDeleteOpen&&<Delete/>}
                                {loading&& <Loading text="Phone"/>}

                    {!loading && phone && Object.keys(phone).length > 0 &&<DetailsPhoneContent {...phone} isAuthenticated={isAuthenticated} isOwner={isOwner} onBuy={handleBuy} />}
                </div>
                 {loading&& <Loading text='Comments'/>}
                {!loading && phone && 
                    <DetailsCommentsSection comments={phone.comments} isAuthenticated={isAuthenticated} isOwner={isOwner} />}
            </div>


        </>
    )
}