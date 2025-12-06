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

  const normalizedCurrentUserId = String(currentUserId);
  const normalizedCommentUserId = comment.userId?._id ? String(comment.userId._id) : '';

  const isOptimistic = comment.isOptimistic || comment._id?.startsWith('temp-');


  const normalizedLikes = Array.isArray(comment.likes)
    ? comment.likes.map(like => String(like))
    : [];

  const isLiked = normalizedLikes.includes(normalizedCurrentUserId);
  const isOwner = normalizedCommentUserId === normalizedCurrentUserId;


  const isLoadingLike = isLiking[comment._id] || false;
  const isLoadingDelete = isDeleting[comment._id] || false;

  const handleLikeClick = () => {
    if (!isOptimistic && !isLoadingLike) {
      onLike(comment._id);
    }
  };

  const handleDeleteClick = () => {
    if (!isOptimistic && !isLoadingDelete) {

      onDelete(comment._id);

    }
  };



  const likeCount = Array.isArray(comment.likes) ? comment.likes.length : 0;
  const displayLikeCount = isLoadingLike ? '...' : likeCount;

  return (
    <div className={`comment-card ${isOptimistic ? 'comment-pending' : ''}`}>
      <div className="comment-header">
        <div className="user-info">
          <i className="icons fas fa-user-circle"></i>
          <span className="username">
            {comment.userId?.username || 'User'}
            {isOptimistic && ' (Posting...)'}
          </span>
          <span className="comment-date">{comment.created_at}</span>
        </div>

        <div className="comment-actions">
          {isAuthenticated && !isOptimistic ? (
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