import React from 'react';

const VoteCard = (props) => {
    let parent

    if (props.article) {
        parent = props.article;
    } else parent = props.comment;


    const addVote = () => {
        if (!parent.comment_id) {
            console.log("Is article")
        } else console.log("Is not article")
    }

    const subVote = () => {
        if (!parent.comment_id) {
            console.log("Is article")
        } else console.log ("Not article")
    }

    return (
        <div className="vote-card">
            <p>VOTE COUNT</p>
            <button onClick={addVote}>+</button>
            <button onClick={subVote}>-</button>
        </div>
    );
};

export default VoteCard;