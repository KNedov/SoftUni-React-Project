import { Link } from 'react-router'
import './HomeProductCard.css'

export default function HomeProductCard({
    _id,
    color,
    comments,
    cpu,
    created_at,
    phoneName: title,
    image

}) {


    let lastComment = comments[comments.length - 1]


    return (

        <div className="phones-grid" id="phones-container">
            <div className="phone-card">
                <div className="phone-image">
                    <img
                        src={image}
                        alt={title}
                    />
                </div>
                <div className="phone-details">
                    <h2 className="phone-name">{title}</h2>
                    {comments.length > 0 ?
                        <div className="latest-comment">
                            <p className="comment-text">
                                {lastComment.text}
                            </p>
                            <div className="comment-meta">
                                <span className="comment-author">- {lastComment.userId.username}</span>
                                <span className="comment-likes">
                                    <i className="icon fas fa-thumbs-up" /> {lastComment.likes.length}
                                </span>
                            </div>
                        </div>
                        :
                        <div className="no-comments">
                            <p>No comments yet</p>
                        </div>
                    }
                    <Link
                        to={`/${_id}/details`}
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