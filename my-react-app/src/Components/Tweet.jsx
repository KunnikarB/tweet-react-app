
import PropTypes from 'prop-types';

const Tweet = ({ tweet }) => {
  return (
    <li>
      <p>{tweet}</p>
    </li>
    );
  };

Tweet.propTypes = {
  tweet: PropTypes.shape({
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tweet;
