import React from 'react';

const OrderSelector = ({setChosenOrder}) => {

    const handleClick = (event) => {
        setChosenOrder(event.target.value)
    }

    return (
        <div>
            <h3>Order by:</h3>
            <button className="button" onClick={handleClick} value='asc' key='asc'>Ascending</button>
            <button className="button" onClick={handleClick} value='desc' key='desc'>Descending</button>
        </div>
    );
};

export default OrderSelector;