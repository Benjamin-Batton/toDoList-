import React from "react";
import { BrowserRouter as Router , Route , Redirect } from "react-router-dom";
import Auth from "../../pages/auth/authPage.jsx";
import {connect} from 'react-redux';


const Content = (props) => (
    <>
      {props.isAuth ? <Redirect path={"/"}/>  : <Auth />}
    </>
   

    
  
);

let mapStateToProps = (store) => ({
  isAuth: store.auth.login.state,
});
// const mapDispatchToProps = (dispatch)=>(
//   {
//     setData: (value)=>(
//       dispatch(value)
//       )
//   }
// )
export default connect(mapStateToProps, {})(Content);
