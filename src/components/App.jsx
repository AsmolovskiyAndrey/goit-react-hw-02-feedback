import React, { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { NoAnswer } from './NoAnswer/NoAnswer';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = state => {
    const feedbackValues = Object.values(state);
    return feedbackValues.reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good / total) * 100);
  };

  incrementValue = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const response = this.countPositiveFeedbackPercentage(
      this.state.good,
      this.countTotalFeedback(this.state)
    );
    const positiveResponse = response ? response : 0;

    return (
      <>
        <Feedback increment={this.incrementValue} />
        <Section>
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              response={positiveResponse}
            />
          ) : (
            <NoAnswer message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
