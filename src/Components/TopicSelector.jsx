import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { getTopics } from '../Utils/api';

const TopicSelector = ({chosenTopic, setChosenTopic}) => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then((topics) => {
            setTopics(topics)
        })
    }, [])

    const handleClick = (event) => {
        setChosenTopic(event.target.value)
    }

    const capitaliseTopic = (topic) => {
        return topic.charAt(0).toUpperCase() + topic.slice(1)
    }

    if (!chosenTopic) {
        return (
            <div>
                <h3>Filter by topic:</h3>
                <ul>
                    <button className="button" onClick={handleClick} value={undefined} key={'All Topics'}>All Topics</button>
                    {topics.map((topic) => {
                        return <button className="button" onClick={handleClick} value={topic.slug} key={topic.slug}>{capitaliseTopic(topic.slug)}</button>
                    })}
            </ul>
            <h2>All Articles:</h2>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Filter by topic:</h3>
                <ul>
                    <button className="button" onClick={handleClick} value={undefined} key={'All Topics'}>All Topics</button>
                    {topics.map((topic) => {
                        return <button className="button" onClick={handleClick} value={topic.slug} key={topic.slug}>{capitaliseTopic(topic.slug)}</button>
                    })}
                </ul>
                <h2>{capitaliseTopic(chosenTopic)} Articles:</h2>
            </div>
        )
    }
};

export default TopicSelector;