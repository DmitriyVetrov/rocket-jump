import React from "react";
import classes from "./ActiveQuiz.module.css";

const ActiveQuiz = (props) => {
  return (
    <>
      <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
          <span>
            <strong>1. </strong>
            How do you do?
          </span>
          <small>4 from 12</small>
        </p>

        <ul>
          <li>Good</li>
          <li>So far so good</li>
          <li>Perfect</li>
        </ul>
      </div>
    </>
  );
};

export default ActiveQuiz;
