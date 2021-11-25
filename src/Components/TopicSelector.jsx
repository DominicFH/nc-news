import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { getTopics } from '../Utils/api';

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
        <div>
            <h3>Topic Selector</h3>
            <ul>
                {topics.map((topic) => {
                    return <button onClick={handleClick} value={topic.slug} key={topic.slug}>{topic.slug}</button>
                })}
            </ul>
        </div>
    );
};

export default TopicSelector;