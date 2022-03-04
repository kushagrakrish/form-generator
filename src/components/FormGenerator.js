import React from "react";
import InputText from "./InputText";
import "../components/Form.css";
import SelectInput from "./SelectInput";
import RadioInput from "./RadioInput";

const FormGenerator = ({ formData }) => {
  // switch (type) {
  //   case "text":
  //     return (
  //       <InputText
  //         label={label}
  //         type={type}
  //         placeholder={placeholder}
  //         required={required}
  //       />
  //     );

  //   case "select":
  //     return (
  //       <SelectInput
  //         label={label}
  //         type={type}
  //         placeholder={placeholder}
  //         required={required}
  //       />
  //     );

  //   case "checkbox":
  //     return (
  //       <RadioInput
  //         label={label}
  //         type={type}
  //         placeholder={placeholder}
  //         required={required}
  //       />
  //     );
  // }

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className='container'>
      <form className='form-outer' onSubmit={(e) => clickHandler(e)}>
        {formData.map((data, id) => {
          switch (data.type) {
            case "text":
              return (
                <InputText
                  type={data.type}
                  placeholder={data.placeholder}
                  required={data.required}
                  className='input'
                  key={id}
                />
              );
            case "email":
              return (
                <InputText
                  type={data.type}
                  placeholder={data.placeholder}
                  required={data.required}
                  key={id}
                />
              );

            case "password":
              return (
                <InputText
                  type={data.type}
                  placeholder={data.placeholder}
                  required={data.required}
                  key={id}
                />
              );
            case "phone":
              return (
                <InputText
                  type={data.type}
                  placeholder={data.placeholder}
                  required={data.required}
                  key={id}
                />
              );

            case "select":
              return (
                <SelectInput
                  type={data.type}
                  label={data.label}
                  required={data.required}
                  field_options={data.field_options}
                  key={id}
                />
              );
            case "radio":
              return (
                <RadioInput
                  type={data.type}
                  label={data.label}
                  required={data.required}
                  key={id}
                />
              );
          }
        })}

        <button type='submit' className='submit-btn'>
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default FormGenerator;
