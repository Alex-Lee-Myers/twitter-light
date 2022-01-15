import { useState } from 'react';
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';

function App() {
  //? useState variable
  const [name, setName] = useState('Alex');
  const [tweet, setTweet] = useState('');
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);

  return (
    <div>
      <h1>Twight</h1>
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} />
      <TweetList name={name} tweets={tweets} setTweets={setTweets}  />
  </div>
  );
}

export default App;

  //? State
  //* state is data in your application. it is a plain javascript object.
  //* its a variable that stores data. difference is state that your UI will update and change.
  //* your UI is in sync with your state.
  //* react is smart enough to re-render your UI when the state changes.