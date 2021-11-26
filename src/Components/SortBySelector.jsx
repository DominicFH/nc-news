import React from 'react';

const SortBySelector = ({setChosenSortBy}) => {

    const handleClick = (event) => {
        setChosenSortBy(event.target.value)
    }

    return (
        <div className="sortby-selector">
            <h3>Sort by:</h3>
            <button className="article-button" onClick={handleClick} value='author' key='author'>Author</button>
            <button className="article-button" onClick={handleClick} value='title' key='title'>Title</button>
            <button className="article-button" onClick={handleClick} value='topic' key='topic'>Topic</button>
            <button className="article-button" onClick={handleClick} value='created_at' key='date'>Date</button>
            <button className="article-button" onClick={handleClick} value='votes' key='votes'>Votes</button>
        </div>
    );
};

export default SortBySelector;