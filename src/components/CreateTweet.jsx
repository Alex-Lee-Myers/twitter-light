import {useState} from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/cjs/react-dom-test-utils.production.min';

const CreateTweet = ({textInput, setTextInput, tweets, setTweets}) => {


    //? Functions
    // function to get users input
    const userInputHandler = (event) => {
        //? event.target.value is the value of the input
        console.log(event.target.value);
        setTextInput(event.target.value);
    };

    const submitTweetHandler = (event) => {
        //? add new tweet to the tweets array
        event.preventDefault();
        console.log(...tweets)
        setTweets([...tweets, textInput]); // spread operator used because we want to add the new tweet to the existing tweets array
        setTextInput('');
    };

    return (
        <form onSubmit={submitTweetHandler}>
            <textarea 
                value={textInput} 
                onChange={userInputHandler} 
                cols="30" 
                rows="10" 
                placeholder="What's happening?"></textarea>
            <button 
                onSubmit={userInputHandler}>
                    Submit
            </button>
        </form>
    )
}

export default CreateTweet;