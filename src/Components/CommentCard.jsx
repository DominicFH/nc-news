import React from 'react';
import { deleteComment, getArticleComments } from '../Utils/api';
import VoteCard from './VoteCard';

const CommentCard = (comment) => {

    const handleClick = () => {
        deleteComment(comment.comment_id).then(() => {getArticleComments(comment.article_id).then((receivedData) => {
            comment.setComments(receivedData)})
    })}

    return (
        <li>
            <div className="comment-card">
            <p className="body">{comment.body}</p>
            <p className="author">Commentor: {comment.author}</p>
            <p className="timestamp">Posted on: {comment.created_at.substr(0,10)}</p>
            <p className="votes">Votes: {comment.votes}</p>
            <VoteCard comment={comment}/>
            <button onClick={handleClick}>Delete Comment</button>
            </div>
        </li>
    );
};

export default CommentCard;