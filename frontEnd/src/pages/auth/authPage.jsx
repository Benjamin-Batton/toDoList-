import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import authPageStyle from "./authPage.module.scss";
import {
  Route,
  withRouter,
  Redirect,
  Link,
  useHistory,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import {
  registrationHandler,
  loginHandler,
  verifyHandler,
} from "./loginReducer.js";

const authComponents = {
  login: (props) => <Login {...props} />,
  registration: (props) => <Registration {...props} />,
  verify: (props) => <Verify {...props} />,
};

const AuthPage = (props) => {
  const browserUrl = useRouteMatch().url;
  const location = useLocation();
  const history = useHistory();
  if (!props.isAuth) {
    return (
      <div className={authPageStyle.authPage}>
        {Object.entries(apiAuth).map(([key, value]) => (
          <Route
            key={key}
            path={`${browserUrl}/${value.name}`}
            render={(routeProps) =>
              authComponents[`${value.name}`]({
                ...routeProps,
                formName: value.name,
                onSubmit: submitHandler(
                  props[`${value.name}Handler`],
                  `${location.pathname}${location.search}`,
                  value.name
                ),
                changeForm: (elem) => {
                  props.history.push(`${browserUrl}/${value.redirect || ""}`);
                },
              })
            }
          />
        ))}
      </div>
    );
  }
  return <Redirect to={"/app/today"} />;
};
const mapStateToProps = (store) => ({
  isAuth: store.auth.login.state,
  isRegistration: store.auth.registration.state,
});
export default connect(mapStateToProps, null)(AuthPage);

export default compose(
  withSuspens,
  withRouter,
  connect(mapStateToProps, { loginHandler, registrationHandler, verifyHandler })
)(AuthPage);
