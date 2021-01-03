import "./styled/reset.scss";
import "./styled/global.scss";
import React, { useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Login } from "./pages/login/login.jsx";
import { compose } from "redux";
import { setTheme } from "./utils/setTheme.js";
import { withSuspens } from "./hoc/suspens.jsx";
import { withLogin } from "./hoc/withLogin.jsx";
import AuthPage from "./pages/auth/authPage.jsx";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Auth from "./pages/auth/authPage.jsx";
import { loginChecker } from "./components/Auth/loginReducer.js";
import { Provider, connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TestingComponent } from "./components/testingComponents/testingComponent.jsx";
import { setAuthUserData } from "./pages/auth/authReducer.js";
import { checkIsAuthUser } from "./components/Auth/loginReducer.js";
import LoginContainer from "./components/Auth/authContainer.jsx";
import { useRoute } from "./routes.jsx";

import { Application } from "./pages/application/application.jsx";
import { RedirectPage } from "./pages/404Page/404Page.jsx";

let client = new ApolloClient({
  uri: "http://localhost:8083/graphql",
});
const App = (props) => {
  useEffect(() => {
    props.checkIsAuthUser();
  }, []);
  useEffect(() => {
    setTheme("light");
  }, []);

  const history = useHistory();
  if (!props.isAuth && !props.isEmptyFetch) {
    return <CircularProgress />;
  }
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route
            path={"/auth"}
            render={(routeProps) => <AuthPage {...routeProps} />}
          />
          {useRoute(props.isAuth)}
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

const mapStateToProps = (store) => ({
  isAuth: store.auth.login.state,
  isEmptyFetch: store.auth.login.isEmptyFetch,
});
// const mapDispatchToProps = (dispatch)=>(
//   {
//     setData: (value)=>(
//       dispatch(value)
//       )
//   }
// )
export default compose(
  withSuspens,
  connect(mapStateToProps, { checkIsAuthUser })
)(App);
