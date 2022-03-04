import React from "react";

const SelectInput = ({ type, required, label, id, field_options }) => {
  return (
    <div>
      <label className='select-input'>{label}</label>
      <select type={type} required={required} className='select-input'>
        {/* <option value={field_options[0].option_label}>
          {field_options[0].option_label}
        </option>
        <option value={field_options[1].option_label}>
          {field_options[1].option_label}
        </option> */}
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
