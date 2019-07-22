import React from "react";

const OperatorButton = (props) => {
  const {buttonContent} = props;
  return (
    <button className="operButton">
    { buttonContent }
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
export default OperatorButton;