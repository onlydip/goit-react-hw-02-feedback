import React from "react";
import * as Yup from 'yup';

const statisticsSchema = Yup.object().shape({
  good: Yup.number().required(),
  neutral: Yup.number().required(),
  bad: Yup.number().required(),
  total: Yup.number().required(),
  positivePercentage: Yup.number().required(),
});


export default function Statistic({ good, neutral, bad, total, positivePercentage })

{
    return (


          <div>
    
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total number of reviews: {total}</p>
    <p>Percentage of positive feedback: {positivePercentage}%</p>
  </div>
    );
};

Statistic.propTypes = statisticsSchema;