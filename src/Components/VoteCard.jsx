import React from 'react';
import { patchArticle } from '../Utils/api';

const VoteCard = (props) => {
    let parent

    if (props.article) {
        parent = props.article;
    } else parent = props.comment;


    const addVote = () => {
        if (!parent.comment_id) {
            patchArticle(parent.article_id, {inc_votes: 1}).then((response) => {
                props.setArticle(response[0])
            })
        } else {
            console.log("Backend not yet setup for changing comment votes")
        }
    }

    const subVote = () => {
        if (!parent.comment_id) {
            patchArticle(parent.article_id, {inc_votes: -1}).then((response) => {
                props.setArticle(response[0])
            })
        } else {
            console.log ("Backend not yet setup for changing comment votes")
        }
    }

    return (
        <div className="vote-card">
            <h3>Votes: {parent.votes}</h3>
            <button onClick={addVote}>+</button>
            <button onClick={subVote}>-</button>
        </div>
    );
};

export default VoteCard;