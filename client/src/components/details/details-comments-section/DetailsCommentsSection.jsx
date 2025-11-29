import './DetailsCommentsSection.css'

export default function DetailsCommentsSection() {

    return (
        <div className="comments-section">
            <h2 className="section-title">Comments</h2>

            <div className="owner-message">
                <i className="icons fas fa-info-circle"></i>
                <p>Owners cannot post comments !</p>
            </div>


            <div className="owner-message">
                <i className="icons fas fa-info-circle"></i>
                <p>First you must login to write comments !</p>
            </div>

            <div className="new-comment" >
                <textarea
            
                    required
                    className="comment-field"
                    placeholder="Write your thoughts about this phone..."
                ></textarea>

                <div className="error-message">

                </div>

                <pre></pre>
                <button

                    className="submit-btn"
                >
                    <i className="fas fa-share-square"></i>
                    Post Comment
                </button>
            </div>


            <div className="comments-list">

                <div className="comment-card">
                    <div className="comment-header">
                        <div className="user-info">
                            <i className="icons fas fa-user-circle"></i>
                            <span className="username">Username</span>
                            <span className="comment-date">Comment create at </span>
                        </div>

                        <div className="comment-actions">
                            <button

                                className="like-btn"

                            >
                                <div className="like-container">
                                    <i className="icons fas fa-thumbs-up"></i>

                                    <span className="like-count">3</span>
                                </div>
                            </button>
                            <button

                                className="delete-btn delete"

                            >
                                <i className="icons fas fa-trash-alt"></i>
                            </button>
                        </div>

                    </div>
                    <div className="comment-content">
                        Comment Text
                    </div>
                </div>

                <div className="comment-card">
                    <p>No comments yet</p>
                </div>

            </div>
        </div>

    )
}