import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./formsControls.module.scss";
import cn from "classnames";

const FormControl = ({ label, touched, error, warning, children }) => {
  const hasError = touched && error;
  const cnStyle = cn(style.formControl, hasError && style.error);
  return (
    <div className={cnStyle}>
      {children || <input {...input} placeholder={label} type={type} />}
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};
export const Input = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <>
      <FormControl
        label={label}
        touched={touched}
        error={error}
        warning={warning}
      >
        <input {...input} placeholder={label} type={type} />
      </FormControl>
    </>
  );
};

export const InputField = ({ name, type, label, validate, warn }) => {
  return (
    <Field
      name={name}
      type={type}
      component={Input}
      label={label}
      validate={validate}
      warn={warn}
    />
  );
};
