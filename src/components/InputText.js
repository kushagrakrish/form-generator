import React from "react";
import "../components/Form.css";

const InputText = (props) => {
  const { type, placeholder = "Default Value", required, label } = props;
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
