import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import HomePage from "../pages/HomePage/HomePage";

export default function AppRouter() {
  return (
    <Router>
        <Suspense fallback="<div>loading...</div>">
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/login" component={LoginPage} exact />
            <Route path="/register" component={RegisterPage} exact/>
            <Route path="/home" component={HomePage} />
          </Switch>
        </Suspense>
    </Router>
  );
}