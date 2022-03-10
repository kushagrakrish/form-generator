import React from "react";

const SelectInput = (props) => {
  const { type, required, label, id, field_options } = props;
  return (
    <div>
      <label className='select-input'>{label}</label>
      <select type={type} required={required} className='select-input'>
        {field_options.map((option, id) => {
          return (
            <option value={option.option_label} key={id}>
              {option.option_label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
