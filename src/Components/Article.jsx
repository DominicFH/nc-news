import React from 'react';
import { useParams } from 'react-router-dom'

const Article = () => {
    const {article_id} = useParams();
    return (
        <div>
            <h1>Article</h1>
            <h2>{article_id}</h2>
        </div>
    );
};

export default Article;