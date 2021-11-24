import React from 'react';

const CommentCard = (comment) => {
    return (
        <li>
            <div className="comment-card">
            <p className="body">{comment.body}</p>
            <p className="author">Commentor: {comment.author}</p>
            <p className="timestamp">Posted on: {comment.created_at.substr(0,10)}</p>
            <p className="votes">Votes: {comment.votes}</p>
            </div>
        </li>
    );
};

export default CommentCard;