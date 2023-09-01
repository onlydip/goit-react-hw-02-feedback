import React from "react";
import PropTypes from 'prop-types';


export default function Feedback({ onLeaveFeedback }) {
  return (
    <div>
     
      <button onClick={() => onLeaveFeedback('good')}>Добре</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Нейтрально</button>
      <button onClick={() => onLeaveFeedback('bad')}>Погано</button>
    </div>
  );
}
Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};