import { useState } from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const TweetInput = ({ addTweet }) => {
  const [tweet, setTweet] = useState('');

  const handleTweet = (e) => {
    e.preventDefault();
    addTweet(tweet);
    setTweet('');
  };

  return (
    <div>
      <form onSubmit={handleTweet}>
        <textarea
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          placeholder="What's happening?"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};
TweetInput.propTypes = {
  addTweet: PropTypes.func.isRequired,
};

export default TweetInput;
