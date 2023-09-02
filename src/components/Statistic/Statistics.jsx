import React from "react";
import * as Yup from 'yup';
import {
  StatisticsStyle,
  StatisticsButtonYellow,
  StatisticsButtonGreen,
  StatisticsButtonRed,
  StatisticsContainer
} from "./Statistics.styled";


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


          <StatisticsContainer>
    
    <StatisticsStyle>😀 Good: <StatisticsButtonGreen>{good}</StatisticsButtonGreen></StatisticsStyle>
    <StatisticsStyle>😐 Neutral: <StatisticsButtonYellow>{neutral}</StatisticsButtonYellow></StatisticsStyle>
    <StatisticsStyle>😡 Bad: <StatisticsButtonRed>{bad}</StatisticsButtonRed></StatisticsStyle>
    <StatisticsStyle>Total number of reviews: {total}</StatisticsStyle>
    <StatisticsStyle>Percentage of positive feedback: {positivePercentage}%</StatisticsStyle>
  </StatisticsContainer>
    );
};

Statistic.propTypes = statisticsSchema;