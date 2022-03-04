import React from "react";
import "../components/Form.css";

const InputText = ({ type, placeholder, required, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className='input-text'
      />
    </div>
  );
};

export default InputText;
