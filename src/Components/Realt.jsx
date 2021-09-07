import React from "react";
import "./Realt.css";

function Realt(props) {
  const inputClasses = ["input"];
  console.log(props.name);
  if (props.name !== "") {
    inputClasses.push("green");
  } else {
    inputClasses.push("red");
  }

  return (
    <>
      <div className='item'>
        {props.name}
        <br />
        <input
          value={props.name}
          type='text'
          onChange={props.changeFlatAddress}
          className={inputClasses.join(" ")}
        />
        <br />
        <button onClick={props.removeFlat}>Remove</button>
      </div>
    </>
  );
}

export default Realt;
