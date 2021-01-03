const email = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? "Invalid email address"
      : undefined;
  const required = (value) =>
    value || typeof value === "number" ? undefined : "Required";
  const maxLength = (max) => (value) =>
    value && value.length > max
      ? `Must be ${max} characters or less`
      : undefined;
  const maxLength16 = maxLength(16);
  const maxLength32 = maxLength(32);
  const confirmPassword = (value, allValuse) => {
    value && value === allValuse ? undefined : "Passwords do not match";
  };
  const minLength = (min) => (value) =>
    value && value.length < min
      ? `Must be ${min} characters or more`
      : undefined;
  const minLength8 = minLength(8);
  const number = (value) =>
    value && isNaN(Number(value)) ? "Must be a number" : undefined;
export {email,required,maxLength,maxLength16,maxLength32,confirmPassword,minLength,minLength8,number};    