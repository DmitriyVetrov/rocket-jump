import React from "react";
import classes from "./Realt.module.css";

function Realt(props) {
  return (
    <>
      <div className={classes.item}>
        {props.name}
        <br />
        <input type='text' onChange={props.changeFlatAddress} />
        <br />
        <button onClick={props.removeFlat}>Remove</button>
      </div>
    </>
  );
}

export default Realt;
