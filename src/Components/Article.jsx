import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getArticle } from '../Utils/api';

const Article = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticle(article_id).then((article) => {
            setArticle(article[0]);
            setIsLoading(false);
        })
    }, [article_id])

    console.log(article)
    
    if (isLoading) return <h2>Loading article...</h2>
    return (
        <div className="content">
            <h2>{article.title}</h2>
            <h3>{article.votes}</h3>
            <p>{article.body}</p>
        </div>
    );
};

export default Article;