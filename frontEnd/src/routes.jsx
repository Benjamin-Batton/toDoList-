import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Application } from "./pages/application/application.jsx";
import { RedirectPage } from "./pages/404Page/404Page.jsx";
import AuthPage from "./pages/auth/authPage.jsx";

export const useRoute = (checkIsAuth) => {
  if (checkIsAuth) {
    return (
      <>
        <Route
          path={"/app"}
          render={(routeProps) => <Application {...routeProps} />}
        />
        <Route exact path={"/"}>
          <Redirect to={"/app/today"} />
        </Route>
        <Route
          path={"/:err"}
          render={(routeProps) => <RedirectPage {...routeProps} />}
        />
      </>
    );
  } else {
    return <Redirect to={"/auth/login"} />;
  }
};
