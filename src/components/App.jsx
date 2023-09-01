import React, { Component } from "react";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };



  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Відгуки</h1>
        <button>Класс</button>
        <button>Нейтрально</button>
        <button>Погано</button>
        <h2>Статистика</h2>
        <button>Класс:{good}</button>
        <button>Нейтрально:{neutral}</button>
        <button>Погано:{bad}</button>

      </div>
    )
  }
}