import React, { useState } from "react";
import InputText from "./InputText";
import "../components/Form.css";
import SelectInput from "./SelectInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const FormGenerator = ({ formData, submit }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    console.log();
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

        {/* <button type='submit' className='submit-btn'>
          Submit Now
        </button> */}
        <Button type={submit} />
      </form>
    </div>
  );
};

export default FormGenerator;
