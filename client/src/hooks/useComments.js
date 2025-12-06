import { useState, useOptimistic, useRef, useCallback } from 'react';

export default function useComments(initialComments = [], currentUserId, user) {
  

  

  const [commentsState, setComments] = useState(() => {
    if (!initialComments || initialComments.length === 0) return [];
    
    return initialComments.map(c => ({
      ...c,
      likes: c.likes.map(l => typeof l === "string" ? l : l._id)
    }));
  });


  const [isCreating, setIsCreating] = useState(false);
  const [isLiking, setIsLiking] = useState({});
  const [isDeleting, setIsDeleting] = useState({});

 
  const syncComments = useCallback((newComments) => {
    if (!newComments || newComments.length === 0) {
      setComments([]);
      return;
    }

    const normalized = newComments.map(c => ({
      ...c,
      likes: c.likes.map(l => typeof l === "string" ? l : l._id)
    }));
    
    setComments(normalized);
  }, []);


  const [optimisticComments, addOptimisticComment] = useOptimistic(
    commentsState,
    (state, action) => {
      switch (action.type) {
        case 'add':
          return [...state, {
            _id: `temp-${Date.now()}`,
            text: action.commentText,
            userId: { _id: currentUserId, username: user.username },
            likes: [],
            created_at: new Date().toLocaleString(),
            isOptimistic: true
          }];
        case 'like':
          return state.map(c => {
            if (c._id === action.commentId) {
              return {
                ...c,
                likes: [...c.likes, currentUserId]
              };
            }
            return c;
          });
        case 'unlike':
          return state.map(c => {
            if (c._id === action.commentId) {
              return {
                ...c,
                likes: c.likes.filter(id => id !== currentUserId)
              };
            }
            return c;
          });
        case 'delete':
          return state.filter(c => c._id !== action.commentId);
        default:
          return state;
      }
    }
  );

  return {
    commentsState,
    optimisticComments,
    isCreating,
    isLiking,
    isDeleting,
    
    setComments,
    setIsCreating,
    setIsLiking,
    setIsDeleting,
    
    addOptimisticComment,
    syncComments
  };
}