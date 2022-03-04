import React from "react";

const RadioInput = ({ label, type, required }) => {
  return (
    <div>
      <label className='radio-label'>{label}</label>
      <input type={type} required={required} className='radio-input' />
    </div>
  );
};

export default RadioInput;
