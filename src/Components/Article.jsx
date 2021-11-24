import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getArticle, getArticleComments } from '../Utils/api';
import CommentCard from './CommentCard';

const Article = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState([]);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticle(article_id).then((article) => {
            setArticle(article[0]);
            setIsLoading(false);
        })
    }, [article_id])

    useEffect(() => {
        getArticleComments(article_id).then((comments) => {
            setComments(comments)
        })
    }, [article_id])
    
    if (isLoading) return <h2>Loading article...</h2>
    return (
        <div className="content">
            <h2>{article.title}</h2>
            <h3>Votes: {article.votes}</h3>
            <p>{article.body}</p>
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