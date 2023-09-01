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
    
    <p>Добре: {good}</p>
    <p>Нейтрально: {neutral}</p>
    <p>Погано: {bad}</p>
    <p>Загальна кількість відгуків: {total}</p>
    <p>Відсоток позитивних відгуків: {positivePercentage}%</p>
  </div>
    );
};

Statistic.propTypes = statisticsSchema;