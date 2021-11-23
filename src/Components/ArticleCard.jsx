import React from 'react';
import { Link } from 'react-router-dom'

const ArticleCard = (article) => {
    return (
        <li>
            <Link to={`/articles/${article.article_id}`} className="article-card" >
            <h3 className="title">{article.title}</h3>
            <h4 className="author">Author: {article.author}</h4>
            <h4 className="votes">Votes: {article.votes}</h4>
            <h4 className="comment-count">Comments: {article.comment_count}</h4>
            </Link>
        </li>
    );
};

export default ArticleCard;