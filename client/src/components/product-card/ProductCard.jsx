import { Link } from 'react-router'
import './ProductCard.css'

export default function ProductCard() {
    return (
        <div className="phones-grid" id="phones-container">
            <div className="phone-card">
                <div className="phone-image">
                    <img
                        src="https://s13emagst.akamaized.net/products/60458/60457156/images/res_968c9ac33392707226842f4933552b0c.jpg?width=720&height=720&hash=E6495DD6BD702C3B660156F76D2B0FDB"
                        alt="Phone Image"
                    />
                </div>
                <div className="phone-details">
                    <h2 className="phone-name">iPhone 15 Pro</h2>
                    <div className="latest-comment">
                        <p className="comment-text">
                            "Amazing camera quality and battery life!"
                        </p>
                        <div className="comment-meta">
                            <span className="comment-author">- JohnDoe</span>
                            <span className="comment-likes">
                                <i className="icon fas fa-thumbs-up" /> 24
                            </span>
                        </div>
                    </div>
                    <div className="no-comments">
                        <p>No comments yet</p>
                    </div>

                    <Link
                        to={'/:productId/details'}
                        color="primary"
                        className="details-btn"
                    >

                        Details
                    </Link>

                </div>
            </div>
        </div>
    )
}