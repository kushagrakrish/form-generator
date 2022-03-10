import React from "react";
import "../components/Form.css";

const Button = (props) => {
  const { submit } = props;
  return (
    <div>
      <button className='submit-btn' type={submit}>
        Submit Now
      </button>
    </div>
  );
};

export default Button;
