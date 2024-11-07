import PropTypes from "prop-types";
import Tweet from "./Tweet";

const TweetList = ({ tweets }) => {
  return (
    <ul>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </ul>
  );
};

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TweetList;