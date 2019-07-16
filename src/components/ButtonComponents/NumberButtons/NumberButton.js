import React from "react";

const NumberButton = (props) => {
  const {buttonContent} = props;
  return (
    <button className="numButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {buttonContent}
    </button>
  );
};
export default NumberButton;