import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getArticle, getArticleComments, postComment } from '../Utils/api';
import CommentCard from './CommentCard';

const Article = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticle(article_id).then((article) => {
            setArticle(article[0]);
            setIsLoading(false);
        })
    }, [article_id, comments])

    useEffect(() => {
        getArticleComments(article_id).then((comments) => {
            setComments(comments)
        })
    }, [article_id, comments])

    const handleSubmit = (event) => {
        event.preventDefault();
        postComment(article_id, newComment);
        setNewComment({})
        event.target.reset();
    }

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewComment((newCommentObject) => {
            return { ...newCommentObject, [name]: value };
        })
    }
    
    if (isLoading) return <h2>Loading article...</h2>
    return (
        <div className="content">
            <h2>{article.title}</h2>
            <h3>Votes: {article.votes}</h3>
            <p>{article.body}</p>
            <h3>Add a comment:</h3>
            <form onSubmit={handleSubmit} className="add-comment-form">
                <label htmlFor="username">Enter an existing username: </label>
                <input type="text" name="username" id="username" onChange={handleInput} required/>
                <label htmlFor="body">Enter comment: </label>
                <input type="text" name="body" id="body" onChange={handleInput} required/>
                <button type="submit">Add Comment</button>
            </form>
            <h3>Comments:</h3>
            <ul className="all-comments">
                {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} {...comment} />
                })}
            </ul>
        </div>
    );
};

export default Article;