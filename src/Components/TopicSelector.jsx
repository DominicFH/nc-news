import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { getTopics } from '../Utils/api';
import { capitalise } from '../Utils/functions';

const TopicSelector = ({setChosenTopic}) => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then((topics) => {
            setTopics(topics)
        })
    }, [])

    const handleClick = (event) => {
        setChosenTopic(event.target.value)
    }

    return (
        <div className="topic-selector">
            <h3>Filter by topic:</h3>
            <ul>
                <button className="article-button" onClick={handleClick} value={undefined} key={'All Topics'}>All Topics</button>
                {topics.map((topic) => {
                    return <button className="article-button" onClick={handleClick} value={topic.slug} key={topic.slug}>{capitalise(topic.slug)}</button>
                })}
            </ul>
        </div>
    )
};

export default TopicSelector;