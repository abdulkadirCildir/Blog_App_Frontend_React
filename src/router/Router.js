import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

export default function AppRouter() {
  return (
    <Router>
        <Suspense fallback="<div>loading...</div>">
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/signin/" component={Signin} exact />
            <Route path="/signup/" component={Signup} exact/>
          </Switch>
        </Suspense>
    </Router>
  );
}