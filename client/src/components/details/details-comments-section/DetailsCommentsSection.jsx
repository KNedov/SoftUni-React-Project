import { useEffect, startTransition, useTransition } from 'react'
import useRequest from '../../../hooks/useRequest'
import { useUserContext } from '../../../contexts/UserContext'
import { useParams } from "react-router-dom";
import './DetailsCommentsSection.css'
import useComments from '../../../hooks/useComments';
import CommentForm from './comment-form/CommentForm';
import CommentCard from './comment-card/CommentCard';

export default function DetailsCommentsSection({ comments, isAuthenticated, isOwner }) {
    const { user } = useUserContext();
    const currentUserId = user._id;
    const { request } = useRequest();
    const { productId: phoneId } = useParams();
    const [isPending, startOptimisticTransition] = useTransition();

    const {
        commentsState,
        optimisticComments,
        isCreating,
        isLiking,
        isDeleting,
        setComments,
        addOptimisticComment,
        setIsCreating,
        setIsLiking,
        setIsDeleting,
        syncComments
    } = useComments(comments, currentUserId, user);

    useEffect(() => {
        if (comments) {
            startOptimisticTransition(() => {
                syncComments(comments);
            });
        }
    }, [comments, syncComments]);

    const handleCreateComment = async (commentText) => {
        if (!commentText?.trim() || isCreating) return;

        try {
            setIsCreating(true);
            
            startOptimisticTransition(() => {
                addOptimisticComment({
                    type: 'add',
                    commentText
                });
            });

            const created = await request(`/phones/${phoneId}/comments`, "POST", {
                commentText
            });

            const newCommentObj = Array.isArray(created) ? created[0] : created;
            const normalizedNew = {
                ...newCommentObj,
                likes: (newCommentObj.likes || []).map(l => typeof l === "string" ? l : l._id)
            };

            startOptimisticTransition(() => {
                setComments(prev => {
                    const withoutTemp = prev.filter(c => !c.isOptimistic);
                    return [...withoutTemp, normalizedNew];
                });
            });

        } catch (err) {
            startOptimisticTransition(() => {
                setComments(prev => prev.filter(c => !c.isOptimistic));
            });
            alert(err.message);
        } finally {
            setIsCreating(false);
        }
    };

    const handleLike = async (commentId) => {
        const comment = optimisticComments.find(c => c._id === commentId);
        const isLiked = comment?.likes?.includes(currentUserId);
        
        if (!comment || comment.isOptimistic || isLiking[commentId]) return;

        try {
            setIsLiking(prev => ({ ...prev, [commentId]: true }));
            
            startOptimisticTransition(() => {
                addOptimisticComment({
                    type: isLiked ? 'unlike' : 'like',
                    commentId
                });
            });

            const updatedComment = await request(`/likes/${commentId}`, 'PUT');
            const normalizedComment = {
                ...updatedComment,
                likes: updatedComment.likes.map(like => like._id)
            };

            startOptimisticTransition(() => {
                setComments(prevComments =>
                    prevComments.map(c => c._id === commentId ? normalizedComment : c)
                );
            });

        } catch (err) {
            alert(err.message);
        } finally {
            setIsLiking(prev => ({ ...prev, [commentId]: false }));
        }
    };

    const handleDelete = async (commentId) => {
        const comment = optimisticComments.find(c => c._id === commentId);
        
        if (!comment || comment.isOptimistic || isDeleting[commentId]) return;

        try {
            setIsDeleting(prev => ({ ...prev, [commentId]: true }));
            
            startOptimisticTransition(() => {
                addOptimisticComment({ type: 'delete', commentId });
            });

            await request(`/phones/${phoneId}/comments/${commentId}`, 'DELETE');
            
            startOptimisticTransition(() => {
                setComments(prev => prev.filter(c => c._id !== commentId));
            });
            
        } catch (err) {
            alert(err.message);
        } finally {
            setIsDeleting(prev => ({ ...prev, [commentId]: false }));
        }
    };

    return (
        <div className="comments-section">
            <h2 className="section-title">Comments</h2>

            <CommentForm
                onSubmit={handleCreateComment}
                isCreating={isCreating || isPending}
                isOwner={isOwner}
                isAuthenticated={isAuthenticated}
            />

            <div className="comments-list">
                {optimisticComments.length > 0 ? (
                    optimisticComments.map(comment => (
                        <CommentCard
                            key={comment._id + (comment.isOptimistic ? '-optimistic' : '')}
                            comment={comment}
                            currentUserId={currentUserId}
                            isAuthenticated={isAuthenticated}
                            onLike={handleLike}
                            onDelete={handleDelete}
                            isLiking={isLiking}
                            isDeleting={isDeleting}
                        />
                    ))
                ) : (
                    <div className="comment-card">
                        <p>No comments yet</p>
                    </div>
                )}
            </div>
        </div>
    );
}

