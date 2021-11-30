import React, { useState, useEffect } from 'react';
import { getArticles } from "../Utils/api.js";
import ArticleCard from "./ArticleCard"
import OrderSelector from './OrderSelector.jsx';
import SortBySelector from './SortBySelector.jsx';
import TopicSelector from './TopicSelector.jsx';
import { useSearchParams } from 'react-router-dom';
import ArticlesByTopic from './ArticlesByTopic.jsx';

const AllArticles = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();

    const topic = searchParams.get('topic')

    const [articles, setArticles] = useState([]);
    const [chosenSortBy, setChosenSortBy] = useState();
    const [chosenOrder, setChosenOrder] = useState();
    const [isLoading, setIsLoading] = useState(true);

    let queryStr = '?'
    let queryArray = [];

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
    if (topic === null) {
        return (
            <div className="content">
                <div className="query-selectors">
                    <SortBySelector setChosenSortBy={setChosenSortBy}/>
                    <OrderSelector setChosenOrder={setChosenOrder} />
                    <TopicSelector />
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
            <ArticlesByTopic topic={topic} setChosenOrder={setChosenOrder} setChosenSortBy={setChosenSortBy} chosenOrder={chosenOrder} chosenSortBy={chosenSortBy}/>
    );
    }

};

export default AllArticles;