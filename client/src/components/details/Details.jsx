import './Details.css'

import DetailsCommentsSection from "./details-comments-section/DetailsCommentsSection";
import DetailsPhoneContent from './details-phone-content/DetailsPhoneContent';

export default function Details() {

    return (

        <>
            <div className="container">

                <div className="phone-card">
                    <div className="phone-header">
                        <a className="back-btn" >
                            <i className="fas fa-arrow-left"></i>
                            Back
                        </a>
                        <h1 className="phone-title">Iphone</h1>

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

                    </div>


                    <DetailsPhoneContent />
                </div>
                <DetailsCommentsSection />
            </div>


        </>
    )
}