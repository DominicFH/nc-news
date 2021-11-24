import React from 'react';

const CommentCard = (comment) => {
    console.log(comment)
    return (
        <li>
            <p>{comment.body}</p>
            <p>Posted on: {comment.created_at.substr(0,10)}</p>
        </li>
    );
};

export default CommentCard;