import React from 'react';

const OrderSelector = ({setChosenOrder}) => {

    const handleClick = (event) => {
        setChosenOrder(event.target.value)
    }

    return (
        <div className="order-selector">
            <h3>Order by:</h3>
            <button className="article-button" onClick={handleClick} value='asc' key='asc'>Ascending</button>
            <button className="article-button" onClick={handleClick} value='desc' key='desc'>Descending</button>
        </div>
    );
};

export default OrderSelector;