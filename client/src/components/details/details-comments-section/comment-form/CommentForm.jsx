import { useState } from 'react';
import './CommentForm.css'
import useForm from '../../../../hooks/useForm';
import { validateComment } from '../../../../validators/validateComment';

export default function CommentForm({ 
  onSubmit, 
  isCreating,
  isOwner,
  isAuthenticated 
}) {


  const handleSubmit = async (value) => {
   
    const commentText = value
    
    if (!commentText || isCreating) return;
    
    try {
      await onSubmit(commentText);
      setValues({ commentText: '' });
    } catch (err) {
      console.error('Failed to submit comment:', err);
      
    }
  };



    const errorText = (field) =>
        errors[field] && touched[field] && (
            <p className="error-text">{errors[field]}</p>
        );

  const { values,
        errors,
        touched,
        setValues,
        register,
        submitHandler,}=useForm({commentText:''},validateComment,handleSubmit)

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
    <form className="new-comment" onSubmit={submitHandler}>
      <textarea
        required
        className="comment-field"
        placeholder="Write your thoughts about this phone..."
     
        {...register('commentText')}
        disabled={isCreating}
      />
     
      <button 
        className="submit-btn" 
        type="submit"
        disabled={isCreating }
      >
        <i className="fas fa-share-square"></i> 
        {isCreating ? 'Posting...' : 'Post Comment'}
      </button>
       {errorText('commentText')}
    </form>
  );
}