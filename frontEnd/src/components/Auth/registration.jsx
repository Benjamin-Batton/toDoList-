import React from "react";
import style from "../Common/formsControls/formsControls.module.scss";
import authStyle from "./auth.module.scss";
import { connect } from "react-redux";
import { compose } from "redux";
import { Button } from "../Common/buttons/button/button.jsx";
import {InputField} from '../Common/formsControls/formControls.jsx'
import { reduxForm } from "redux-form";
import ReCAPTCHA from "react-google-recaptcha";
import { Redirect } from "react-router-dom";
import {
  email,
  required,
  maxLength,
  maxLength16,
  maxLength32,
  confirmPassword,
  minLength,
  minLength8,
  number,
} from "../Common/formsControls/validators.js";

const grecaptchaObject = window.grecaptcha;
 const Registration = ({ handleSubmit, error,formName, isRegistration , changeForm }) => {
 
  return (
		<>
		<h2>{formName}</h2>
    {isRegistration.state && isRegistration.message? isRegistration.message :
      <form className={authStyle.form}
      // onSubmit={props.regHandler(
      //   "http://localhost:51984/reg/registration",
      //   "POST",
      //   props.dataReg
      // )}
      onSubmit={handleSubmit}
    >
      <InputField
        name={"email"}
        type={"email"}
        label="email"
        validate={[required, email, maxLength32, minLength8]}
        warn={minLength8}
      />

      <InputField
        name={"password"}
        type={"password"}
        label="password"
        validate={[required, maxLength32, minLength8]}
        warn={minLength8}
      />

      <InputField
        name={"confirmPassword"}
        type={"password"}
        label="confirmPassword"
        validate={[required, confirmPassword, maxLength32, minLength8]}
        warn={minLength8}
      />
      <div className={authStyle.captcha}>
        <div>
          <ReCAPTCHA
            sitekey={"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
            grecaptcha={grecaptchaObject}
          />
        </div>
      </div>

      <div className={authStyle.btns}>
        <div>
        <button type={'submit'}>Зарегистрироваться</button>
        </div>
        <div>
        
          {/* <Button
            buttonVersion={"buttonGreen"}
            onClicked={changeForm}
          >
            У меня есть аккаунт
          </Button> */}
        </div>
      </div>
      <button type={"button"}  onClick={changeForm} >
        У меня есть аккаунт
        </button>
      <div>
        {error && <div className={style.formSummaryError}>{error}</div>}
      </div>
      <div>
        {!isRegistration.state && isRegistration.message }
      </div>
    </form>
      }
   
		</>
  );
};


const mapStateToProps = (store) => ({
  isRegistration: store.auth.registration,
});

export default compose(reduxForm({ form: "registration" }),connect(mapStateToProps,null)) (Registration);

