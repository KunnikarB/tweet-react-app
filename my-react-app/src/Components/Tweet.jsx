
import PropTypes from 'prop-types';

const Tweet = ({ tweet }) => {
  return (
    <div>
      <p>{tweet}</p>
    </div>
    );
  };

Tweet.propTypes = {
  tweet: PropTypes.shape({
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tweet;
