import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import {useHttp} from "../hooks/useHttp.js";

const grecaptchaObject = window.grecaptcha;

export const AuthHoc = (Component)=>(props)=>{
    // let [newEmail, setNewEmail] = useState({ email: "", password: "" });
    // СДЕЛАТЬ ПРЕЗЕНТАЦИОННУЮ КОМПОНЕНТУ или ХОК
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
  
    let [emailValidator, setEmailValidator] = useState(true);
    let [passwordValidator, setPasswordValidator] = useState(true);
    let [confirmPasswordValidator, setConfirmPasswordValidator] = useState(true);
  
    let [onEmailClicked, onEmailClickedSet] = useState(false);
    let [onPasswordClicked, onPasswordClickedSet] = useState(false);
    let [onConfirmPasswordClicked, onConfirmPasswordClickedSet] = useState(false);
  
    let [captcha, setCaptcha] = useState(null);
  
    // В ХОКЕ УКАЗАТЬ ВСЕ ЭТИ СТЕЙТЫ И ПРОВЕРКУ И НАЗВАТЬ ХОК AuthMiddleware
  
    let setMail = (e) => {
      e.preventDefault();
      setEmail(e.target.value);
      mailValidator(e.target.value);
    };
  
    let setPass = (e) => {
      e.preventDefault();
      setPassword(e.target.value);
      passValidator(e.target.value);
      validateConfirmPass(e);
    };
  
    let setConfirmPass = (e) => {
      e.preventDefault();
      setConfirmPassword(e.target.value);
      validateConfirmPass(e);
    };
  
    let mailValidator = (value) => {
      /@/.test(value) ? setEmailValidator(false) : setEmailValidator(true);
    };
  
    let passValidator = (value) => {
      /[A-Z]/.test(value)
        ? setPasswordValidator(false)
        : setPasswordValidator(true);
    };
  
    let validateConfirmPass = (e) => {
      if (e.target.type === "password") {
        if(confirmPassword === e.target.value && password !== ""){
          setConfirmPasswordValidator(false)
        } else{
          setConfirmPasswordValidator(true);
        };
      } else {
      event.target.value === password && password != ""
        ? setConfirmPasswordValidator(false)
        : setConfirmPasswordValidator(true);
      }
    };
   
    let onEmailClick = (e) => {
      e.preventDefault();
      onEmailClickedSet(true);
  
    };
    let onPasswordClick = (e) => {
      e.preventDefault();
      onPasswordClickedSet(true);
    };
    let onConfirmPasswordClick = (e) => {
      e.preventDefault();
      onConfirmPasswordClickedSet(true);
    };
  
    let passTagStyle = passwordValidator && onPasswordClicked ? "grid" : "none";
    let confirmTagStyle = confirmPasswordValidator && onConfirmPasswordClicked? "grid" : "none";
  
    return (
    <Component {...props} email={email} password={password} 
    confirmPassword={confirmPassword}
      setMail={setMail} setPass={setPass} 
    setConfirmPass={setConfirmPass} mailValidator={mailValidator}
     onEmailClick={onEmailClick} onPasswordClick={onPasswordClick} 
     onConfirmPasswordClick={onConfirmPasswordClick} 
     passTagStyle={passTagStyle} captcha={<ReCAPTCHA sitekey={'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                         grecaptcha={grecaptchaObject}
        />}  confirmTagStyle={confirmTagStyle} />
    )
}