import React from "react";
import { Field, reduxForm } from "redux-form";
import cn from "classnames";
import formStyle from "./fieldCreator.module.scss";

const createFormControl = (Component) => {
  return ({
    input,
    label,
    type,
    meta: { touched, error, warning },
    ...attrs
  }) => {
    const style = cn(
      formStyle.formControl,
      //  {active: touched,}
      touched && formStyle.active
    );
    return (
      <div className={style}>
        <Component
          {...input}
          {...attrs}
          touched={touched}
          error={error}
          warning={warning}
          label={label}
          type={type}
        />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    );
  };
};

export const fieldCreator = (Component) => {
  const ComponentWithFormData = createFormControl(Component);
  return ({ name, type, label, validate, warn }) => {
    return (
      <Field
        name={name}
        type={type}
        component={ComponentWithFormData}
        label={label}
        validate={validate}
        warn={warn}
      />
    );
  };
};
