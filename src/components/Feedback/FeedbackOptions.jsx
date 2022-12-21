import './FeedbackOptions.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <span>
      {options.map(btn => (
        <button key={btn} type="button" name={btn} onClick={onLeaveFeedback}>
          {btn}
        </button>
      ))}
    </span>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
