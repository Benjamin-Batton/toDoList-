import React, { useEffect } from "react";
import { Redirect,useHistory,useRouteMatch,Link } from "react-router-dom";
import { InputField } from "../Common/formsControls/formControls.jsx";
import { reduxForm } from "redux-form";
import { Button } from "../Common/buttons/button/button.jsx";
import ReCAPTCHA from "react-google-recaptcha";
import style from "../Common/formsControls/formsControls.module.scss";
import authStyle from "./auth.module.scss";
import { connect } from "react-redux";

 const Verify = ({ onSubmit, verifyData }) => {
   const history = useHistory();
    if(verifyData.state && verifyData.message){
  setTimeout(()=>{
    history.replace("/auth/login")},4000)
  }
  useEffect(() => {
    onSubmit({});
  }, []);
  return <div>{ verifyData.message }</div>;
};

const mapStateToProps = (store) => ({
  verifyData: store.auth.verifyData,
});

export default connect(mapStateToProps, null)(Verify);
