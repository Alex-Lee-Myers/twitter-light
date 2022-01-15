import React from 'react';

const Tweet = ({name, message}) => {
    return (
        <div className="tweet">
            <h2>{name}</h2>
            <h2>{message}</h2>
            <button>Delete</button>
            <button>Like</button>
        </div>
    );
};

export default Tweet;