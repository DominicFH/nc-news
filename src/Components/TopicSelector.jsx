import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { getTopics } from '../Utils/api';
import { capitalise } from '../Utils/functions';

const TopicSelector = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then((topics) => {
            setTopics(topics)
        })
    })

    return (
        <div className="topic-selector">
            <h3>Filter by topic:</h3>
            <ul>
                <Link to='/articles' className="article-button" key={'All Topics'}>All Topics</Link>
                {topics.map((topic) => {
                    return <Link to={`/articles?topic=${topic.slug}`} className="article-button" value={topic.slug} key={topic.slug}>{capitalise(topic.slug)}</Link>
                })}
            </ul>
        </div>
    )
}

export default TopicSelector;