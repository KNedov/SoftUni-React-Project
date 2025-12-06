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

export default function Details() {
    const { isAuthenticated } = useUserContext();
    const navigate = useNavigate()
    const { productId } = useParams()
    const { data: phone } = useRequest(`/phones/${productId}`, [])
    const isOwner = useIsOwner(phone.userId)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

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
                    <DetailsPhoneContent {...phone} isAuthenticated={isAuthenticated} isOwner={isOwner} />
                </div>
                <DetailsCommentsSection comments={phone.comments} isAuthenticated={isAuthenticated} isOwner={isOwner} />
            </div>


        </>
    )
}