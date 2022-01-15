import {useState} from 'react';

const CreateTweet = () => {
    //? useState variables
    const [textInput, setTextInput] = useState('');

    //? Functions
    // function to get users input
    const userInputHandler = (event) => {
        //? event.target.value is the value of the input
        console.log(event.target.value);
        setTextInput(event.target.value);
    };

    return (
        <form>
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