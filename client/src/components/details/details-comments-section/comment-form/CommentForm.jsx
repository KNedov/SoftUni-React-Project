import { useState } from 'react';
import './CommentForm.css'

export default function CommentForm({ 
  onSubmit, 
  isCreating,
  isOwner,
  isAuthenticated 
}) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentText = newComment.trim();
    
    if (!commentText || isCreating) return;
    
    try {
      await onSubmit(commentText);
      setNewComment(""); 
    } catch (err) {
      console.error('Failed to submit comment:', err);
      
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="owner-message">
        <i className="icons fas fa-info-circle"></i>
        <p>First you must login to write comments!</p>
      </div>
    );
  }

  if (isOwner) {
    return (
      <div className="owner-message">
        <i className="icons fas fa-info-circle"></i>
        <p>Owners cannot post comments!</p>
      </div>
    );
  }

  return (
    <form className="new-comment" onSubmit={handleSubmit}>
      <textarea
        required
        className="comment-field"
        placeholder="Write your thoughts about this phone..."
        minLength={3}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        disabled={isCreating}
      />
      <button 
        className="submit-btn" 
        type="submit"
        disabled={isCreating || !newComment.trim()}
      >
        <i className="fas fa-share-square"></i> 
        {isCreating ? 'Posting...' : 'Post Comment'}
      </button>
    </form>
  );
}