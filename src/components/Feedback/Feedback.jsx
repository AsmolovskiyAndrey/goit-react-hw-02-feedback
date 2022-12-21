import './Feedback.css';

export const Feedback = ({ increment }) => (
  <div>
    <h2>Please leave feedback</h2>
    <span>
      <button type="button" name="good" onClick={increment}>
        Good
      </button>
      <button type="button" name="neutral" onClick={increment}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={increment}>
        Bad
      </button>
    </span>
  </div>
);
