const loginFormHandler = ({ handler, location, formData }) => {
  handler(location, { email: formData.email, password: formData.password });
};
const registrationFormHandler = ({ handler, location, formData }) => {
  handler(location, {
    email: formData.email,
    password: formData.password,
    confirmPassword: formData.confirmPassword,
  });
};
const verifyHandler = ({ handler, location }) => {
  handler(location, {});
};

const handlers = {
  login: loginFormHandler,
  registration: registrationFormHandler,
  verify: verifyHandler,
};

export const submitHandler = (handler, location, formName) => (formData) => {
  handlers[formName]({ handler, location, formData });
};
