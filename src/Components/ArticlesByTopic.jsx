import React, {useState, useEffect} from 'react';
import { getArticlesByTopic } from '../Utils/api';
import SortBySelector from './SortBySelector';
import OrderSelector from './OrderSelector';
import TopicSelector from './TopicSelector';
import { capitalise } from '../Utils/functions';
import ArticleCard from './ArticleCard';

const ArticlesByTopic = ({topic}) => {

    const [articles, setArticles] = useState();
    const [chosenSortBy, setChosenSortBy] = useState();
    const [chosenOrder, setChosenOrder] = useState();
    const [isLoading, setIsLoading] = useState(true);

    let queryStr = '&'

    useEffect(() => {
        getArticlesByTopic(topic, queryStr).then((receivedArticles) => {
            setArticles(receivedArticles)
            setIsLoading(false)
        })
    }, [chosenOrder, chosenSortBy])

    let queryArray = [];

    if (chosenSortBy) {
        queryArray.push(`sort_by=${chosenSortBy}`)
    }

    if (chosenOrder) {
        queryArray.push(`order=${chosenOrder}`)
    }

    queryStr += queryArray.join("&")

    if (isLoading) return <h2>Loading articles...</h2>
    return (
            <div className="content">
                <div className="query-selectors">
                    <SortBySelector setChosenSortBy={setChosenSortBy}/>
                    <OrderSelector setChosenOrder={setChosenOrder} />
                    <TopicSelector />
                </div>
                <h2>{capitalise(topic)} Articles:</h2>
                    <ul className="all-articles">
                        {articles.map((article) => {
                            return <ArticleCard key={article.article_id} {...article} />
                        })}
                    </ul>
            </div>
    )
};

export default ArticlesByTopic;