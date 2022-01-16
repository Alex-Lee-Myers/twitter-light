import {useState} from 'react';
// import '../styles/Tweet.scss';
import styled from 'styled-components';

const Tweet = ({name, tweet, tweets, setTweets}) => {
    // useState Variables

    const deleteTweet = () => {
        console.log('Deleting tweet...');
        setTweets(tweets.filter((state) => state.id !== tweet.id));
    }



    return (
        <TweetStyled>
            <h2>{name}</h2>
            <p>{tweet.message}</p>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </TweetStyled>
    );
};

//styled-components
const TweetStyled = styled.div`
    background-color: blue;
    color: white;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px black;
    h2 {
        font-size: 1.5rem;
    }
    p {
        font-size: 1rem;
    }
`;

export default Tweet;