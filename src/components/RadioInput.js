import React from "react";

const RadioInput = (props) => {
  const { label, type, required } = props;
  return (
    <div>
      <label className='radio-label'>{label}</label>
      <input type={type} required={required} className='radio-input' />
    </div>
  );
};

export default RadioInput;
