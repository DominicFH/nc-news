import React from 'react';

const SortBySelector = ({setChosenSortBy}) => {

    const handleClick = (event) => {
        setChosenSortBy(event.target.value)
    }

    return (
        <div>
            <h3>Sort by:</h3>
            <button className="button" onClick={handleClick} value='author' key='author'>Author</button>
            <button className="button" onClick={handleClick} value='title' key='title'>Title</button>
            <button className="button" onClick={handleClick} value='topic' key='topic'>Topic</button>
            <button className="button" onClick={handleClick} value='created_at' key='date'>Date</button>
            <button className="button" onClick={handleClick} value='votes' key='votes'>Votes</button>
        </div>
    );
};

export default SortBySelector;