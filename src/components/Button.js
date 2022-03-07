import React from "react";
import "../components/Form.css";

const Button = ({ submit }) => {
  return (
    <div>
      <button className='submit-btn' type={submit}>
        Submit Now
      </button>
    </div>
  );
};

export default Button;
