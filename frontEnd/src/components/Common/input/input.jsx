import React from "react";
import cn from "classnames";
import inputStyle from "./input.module.scss";

export const Input = ({
  id,
  loading,
  disabled,
  active,
  touched,
  error,
  type,
  warning,
  className,
  ...attrs
}) => {
  const classes = cn(
    inputStyle.inputWrapp,
    className,
    { active: touched },
    { active }
  );

  if (!id && attrs.name) {
    return (
      <div className={inputStyle.inputContainer}>
        <label className={inputStyle.label} htmlFor={inputStyle.input}>
          <span>{type}</span>
        </label>
        <input
          type={type}
          autoComplete={"on"}
          id={inputStyle.input}
          {...attrs}
        />
      </div>
    );
  } else {
    return (
      <div>
        <input
          type={type}
          className={classes}
          id={inputStyle.input}
          {...attrs}
        />
        ;
      </div>
    );
  }
};
Input.defaultProps = {
  id: null,
  loading: false,
  disabled: false,
  active: false,
  type: "text",
  touched: null,
  className: "",
  warning: false,
  error: false,
};
