import React from "react";
import PropTypes from 'prop-types';


export default function Feedback({ onLeaveFeedback }) {
  return (
    <div>
     
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
    </div>
  );
}
Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};