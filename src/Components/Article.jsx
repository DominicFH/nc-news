import React from 'react';
import { useParams } from 'react-router-dom'

const Article = () => {
    const {article_id} = useParams();
    return (
        <div className="content">
            <h2>Individual Article</h2>
            <h3>{article_id}</h3>
        </div>
    );
};

export default Article;