import React from 'react';
import Tweet from './Tweet';

const TweetList = ({name, tweets, setTweets}) => {
    return (
        <div className="tweet-list">
            {tweets.map((tweet, index) => {
                return <Tweet tweets={tweets} setTweets={setTweets} key={index} name={name} tweet={tweet} />
            })}
        </div>
    );
};

export default TweetList;