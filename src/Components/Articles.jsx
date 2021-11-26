import React, { useState, useEffect } from 'react';
import { getArticles } from "../Utils/api.js";
import ArticleCard from "./ArticleCard"
import OrderSelector from './OrderSelector.jsx';
import SortBySelector from './SortBySelector.jsx';
import TopicSelector from './TopicSelector.jsx';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [chosenTopic, setChosenTopic] = useState();
    const [chosenSortBy, setChosenSortBy] = useState();
    const [chosenOrder, setChosenOrder] = useState();
    const [isLoading, setIsLoading] = useState(true);

    let queryStr = '?'
    let queryArray = [];
    
    if (chosenTopic) {
        queryArray.push(`topic=${chosenTopic}`)
    }

    if (chosenSortBy) {
        queryArray.push(`sort_by=${chosenSortBy}`)
    }

    if (chosenOrder) {
        queryArray.push(`order=${chosenOrder}`)
    }

    queryStr += queryArray.join("&")

    useEffect(() => {
        getArticles(queryStr).then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        })
    }, [queryStr])


    if (isLoading) return <h2>Loading articles...</h2>
    return (
        <div className="content">
            <SortBySelector setChosenSortBy={setChosenSortBy}/>
            <OrderSelector setChosenOrder={setChosenOrder} chosenSortBy={chosenSortBy}/>
            <TopicSelector chosenTopic={chosenTopic} setChosenTopic={setChosenTopic}/>
                <ul className="all-articles">
                    {articles.map((article) => {
                        return <ArticleCard key={article.article_id} {...article} />
                    })}
                </ul>
        </div>
    );
};

export default Articles;