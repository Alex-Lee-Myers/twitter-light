import {useState} from 'react';

const Tweet = ({name, tweet, tweets, setTweets}) => {
    // useState Variables

    const deleteTweet = () => {
        console.log('Deleting tweet...');
        setTweets(tweets.filter((state) => state.id !== tweet.id));
    }



    return (
        <div className="tweet">
            <h2>{name}</h2>
            <p>{tweet.message}</p>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </div>
    );
};

export default Tweet;