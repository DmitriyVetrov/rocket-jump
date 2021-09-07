import React from "react";
import classes from "./Realt.module.css";

function Realt(props) {
  return (
    <>
      <div className={classes.item}>
        {props.name}
        <p>
          <button
            onClick={props.onChangeRealt.bind(
              props.onChangeRealt,
              "Changed by " + props.name
            )}
          >
            Click
          </button>
        </p>
      </div>
    </>
  );
}

export default Realt;
