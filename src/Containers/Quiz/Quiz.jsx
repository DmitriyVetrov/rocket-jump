import React from "react";
import { Component } from "react";
import ActiveQuiz from "../../Components/ActiveQuiz";
import classes from "./Quiz.module.css";

export default class Quiz extends Component {
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz></ActiveQuiz>
        </div>
      </div>
    );
  }
}
