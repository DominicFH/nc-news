import React, { useState, useEffect } from 'react';
import { getArticles } from "../Utils/api.js";
import ArticleCard from "./ArticleCard"
import TopicSelector from './TopicSelector.jsx';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [chosenTopic, setChosenTopic] = useState()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticles().then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        })
    }, [])

    if (chosenTopic) {
        console.log("Truthy!")
    } else console.log ("Falsy!")

    if (isLoading) return <h2>Loading articles...</h2>
    return (
        <div className="content">
            <h2>Articles</h2>
            <TopicSelector setChosenTopic={setChosenTopic}/>
                <ul className="all-articles">
                    {articles.map((article) => {
                        return <ArticleCard key={article.article_id} {...article} />
                    })}
                </ul>
        </div>
    );
};

export default Articles;