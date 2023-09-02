import React from "react";
import * as Yup from 'yup';
import { StatisticsStyle } from "./Statistics.styled";


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
    
    <StatisticsStyle>😀 Good: {good}</StatisticsStyle>
    <StatisticsStyle>😐 Neutral: {neutral}</StatisticsStyle>
    <StatisticsStyle>😡 Bad: {bad}</StatisticsStyle>
    <StatisticsStyle>Total number of reviews: {total}</StatisticsStyle>
    <StatisticsStyle>Percentage of positive feedback: {positivePercentage}%</StatisticsStyle>
  </div>
    );
};

Statistic.propTypes = statisticsSchema;