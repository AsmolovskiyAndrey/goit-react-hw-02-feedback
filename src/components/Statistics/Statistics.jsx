import './Statistics.css';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, response }) => (
  <ul className="stat_box">
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {response} %</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  response: PropTypes.PropTypes.number.isRequired,
};
