import './CommentCard.css'

export default function CommentCard({
  comment,
  currentUserId,
  isAuthenticated,
  onLike,
  onDelete,
  isLiking,
  isDeleting
}) {
  const isLiked = comment.likes.some(like => like === currentUserId);
  const isOwner = comment.userId?._id  === String(currentUserId);
  const isLoadingLike = isLiking[comment._id] || false;
  const isLoadingDelete = isDeleting[comment._id] || false;

  const formattedDate = new Date(comment?.created_at).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
});

  const handleLikeClick = () => {
  onLike(comment._id);
  };

  const handleDeleteClick = () => {
      onDelete(comment._id);
  };

  const likeCount = Array.isArray(comment.likes) ? comment.likes.length : 0;
  const displayLikeCount = isLoadingLike ? '...' : likeCount;

  return (
    <div className={`comment-card ${comment ? 'comment-pending' : ''}`}>
      <div className="comment-header">
        <div className="user-info">
          <i className="icons fas fa-user-circle"></i>
          <span className="username">
            {comment.userId?.username || 'User'}
            
          </span>
          <span className="comment-date">{formattedDate}</span>
        </div>

        <div className="comment-actions">
          {isAuthenticated && comment ? (
            !isOwner ? (
              !isLiked ? (
                <button
                  className="like-btn"
                  onClick={handleLikeClick}
                  disabled={isLoadingLike}
                  aria-label="Like comment"
                >
                  <div className="like-container">
                    <i className="icons fas fa-thumbs-up"></i>
                    <span className="like-count">{displayLikeCount}</span>
                  </div>
                </button>
              ) : (
                <div className="like-container liked" aria-label="You liked this comment">
                  <i className="icons fas fa-thumbs-up"></i>
                  <span className="like-count">{displayLikeCount}</span>
                </div>
              )
            ) : (
              <button
                className="delete-btn delete"
                onClick={handleDeleteClick}
                disabled={isLoadingDelete}
                aria-label="Delete comment"
              >
                <i className="icons fas fa-trash-alt"></i>
                {isLoadingDelete && ' Deleting...'}
              </button>
            )
          ) : (
            <div className="like-container">
              <i className="icons fas fa-thumbs-up"></i>
              <span className="like-count">{likeCount}</span>
            </div>
          )}
        </div>
      </div>

      <div className="comment-content">{comment.text}</div>
    </div>
  );
}