import { useState } from 'react'
import useRequest from '../../../hooks/useRequest'
import { useUserContext } from '../../../contexts/UserContext'
import { useParams } from "react-router-dom";
import './DetailsCommentsSection.css'

import CommentForm from './comment-form/CommentForm';
import CommentCard from './comment-card/CommentCard';

export default function DetailsCommentsSection({ comments: firstComments, isAuthenticated, isOwner }) {
    const { user } = useUserContext();
    const currentUserId = user?._id;
    const { request } = useRequest();
    const { productId: phoneId } = useParams();

    const [comments, setComments] = useState(firstComments)
    const [isCreating, setIsCreating] = useState(false);
    const [isLiking, setIsLiking] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleCreateComment = async (commentText) => {
        if (!commentText || isCreating) return;

        try {
            setIsCreating(true);
            const created = await request(`/phones/${phoneId}/comments`, "POST", commentText);
            const newComment = created
                .slice()
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];

            setComments(prev => [...prev, newComment]);

        } catch (err) {
        } finally {
            setIsCreating(false);
        }
    };

    const handleLike = async (commentId) => {

        try {

            setIsLiking(prev => ({ ...prev, [commentId]: true }));




            const updatedComment = await request(`/likes/${commentId}`, 'PUT');

            setComments(prev =>
                prev.map(comment =>
                    comment._id === updatedComment._id ? updatedComment : comment
                )

            );





        } catch (err) {
            alert(err.message);
        } finally {
            setIsLiking(prev => ({ ...prev, [commentId]: false }));
        }
    };

    const handleDelete = async (commentId) => {


        try {
            setIsDeleting(prev => ({ ...prev, [commentId]: true }));

            const newComments = await request(`/phones/${phoneId}/comments/${commentId}`, 'DELETE');

            newComments.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

            setComments(prev => {
                prev.length = 0;
                prev.push(...newComments);
                return prev;
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
                isCreating={isCreating}
                isOwner={isOwner}
                isAuthenticated={isAuthenticated}
            />

            <div className="comments-list">
                {comments?.length > 0 ? (
                    comments.map(comment => (
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

