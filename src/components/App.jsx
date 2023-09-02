import React, { Component } from "react";
import  Section  from "./Section/Section";
import  Statistic  from "./Statistic/Statistics";
import  Feedback  from "./Feedback/Feedback";
import  Notification  from "./Notification/Notification";
import { AppSection } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };




  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }
    ));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

    countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <AppSection>
        <Section title="Please, leave a review about Expresso Cafe">
          <Feedback onLeaveFeedback={this.handleFeedback} />
        </Section>

         <Section title="Statistics">
          {total > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There are no reviews" />
          )}
        </Section>
      </AppSection>
    );
  }
}