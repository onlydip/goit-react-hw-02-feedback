import React from "react";
import PropTypes from 'prop-types';
import { FeedBack } from "./Feedback.styled";
import { FeedBackButton } from "./Feedback.styled";
export default function Feedback({ onLeaveFeedback }) {
  return (
    <FeedBack>
     
      <FeedBackButton onClick={() => onLeaveFeedback('good')}>Good😀</FeedBackButton>
      <FeedBackButton onClick={() => onLeaveFeedback('neutral')}>Neutral😐</FeedBackButton>
      <FeedBackButton onClick={() => onLeaveFeedback('bad')}>Bad😡</FeedBackButton>
    </FeedBack>
  );
}
Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};