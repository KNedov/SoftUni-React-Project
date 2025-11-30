import { Link, useNavigate, useParams } from 'react-router';
import { useUserContext } from '../../contexts/UserContext';
import useRequest from '../../hooks/userRequest';
import './Details.css'

import DetailsCommentsSection from "./details-comments-section/DetailsCommentsSection";
import DetailsPhoneContent from './details-phone-content/DetailsPhoneContent';

export default function Details() {
    const { user, isAuthenticated } = useUserContext();
    const navigate = useNavigate()
    const { productId } = useParams()
    const { data: phone } = useRequest(`/phones/${productId}`, [])



    return (

        <>
            <div className="container">

                <div className="phone-card">
                    <div className="phone-header">
                        <Link className="back-btn" >
                            <i className="fas fa-arrow-left"></i>
                            Back
                        </Link>
                        <h1 className="phone-title">{phone.phoneName}</h1>

                        {isAuthenticated &&
                            <div className="actions">
                                <button

                                    className="action-btn"
                                >
                                    <i className="fas fa-pencil-alt"></i>
                                </button>
                                <button

                                    className="action-btn delete"
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        }

                    </div>


                    <DetailsPhoneContent {...phone} isAuthenticated={isAuthenticated} />
                </div>
                <DetailsCommentsSection comments={phone.comments} isAuthenticated={isAuthenticated} />
            </div>


        </>
    )
}