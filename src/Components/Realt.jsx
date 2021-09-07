import React from "react";
import classes from "./Realt.module.css";

function Realt(props) {
  return <div className={classes.item}>{props.name}</div>;
}

export default Realt;
