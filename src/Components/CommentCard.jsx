import React from 'react';
import { deleteComment } from '../Utils/api';
import VoteCard from './VoteCard';

const CommentCard = (comment) => {

    const handleClick = () => {
        deleteComment(comment.comment_id)
    }

    return (
        <li>
            <div className="comment-card">
            <p className="body">{comment.body}</p>
            <p className="author">Commentor: {comment.author}</p>
            <p className="timestamp">Posted on: {comment.created_at.substr(0,10)}</p>
            <p className="votes">Votes: {comment.votes}</p>
            < VoteCard />
            <button onClick={handleClick}>Delete Comment</button>
            </div>
        </li>
    );
};

export default CommentCard;