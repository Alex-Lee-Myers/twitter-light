import {useState} from 'react';

const Tweet = ({name, tweet, tweets, setTweets}) => {
    // useState Variables

    const deleteTweet = () => {
        console.log('Deleting tweet...');
        setTweets(tweets.filter((t) => t !== tweet));
    }



    return (
        <div className="tweet">
            <h2>{name}</h2>
            <p>{tweet}</p>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </div>
    );
};

export default Tweet;