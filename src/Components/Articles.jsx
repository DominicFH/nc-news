import React, { useState, useEffect } from 'react';
import { getArticles } from "../Utils/api.js";
import { capitalise } from '../Utils/functions.js';
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
    if(!chosenTopic) {
        return (
            <div className="content">
                <div className="query-selectors">
                    <SortBySelector setChosenSortBy={setChosenSortBy}/>
                    <OrderSelector setChosenOrder={setChosenOrder} chosenSortBy={chosenSortBy}/>
                    <TopicSelector setChosenTopic={setChosenTopic}/>
                </div>
                <h2>All Articles:</h2>
                    <ul className="all-articles">
                        {articles.map((article) => {
                            return <ArticleCard key={article.article_id} {...article} />
                        })}
                    </ul>
            </div>
        );
    } else {
        return (
            <div className="content">
                <div className="query-selectors">
                    <SortBySelector setChosenSortBy={setChosenSortBy}/>
                    <OrderSelector setChosenOrder={setChosenOrder} chosenSortBy={chosenSortBy}/>
                    <TopicSelector setChosenTopic={setChosenTopic}/>
                </div>
                <h2>{capitalise(chosenTopic)} Articles:</h2>
                    <ul className="all-articles">
                        {articles.map((article) => {
                            return <ArticleCard key={article.article_id} {...article} />
                        })}
                    </ul>
            </div>
        )
    }

};

export default Articles;