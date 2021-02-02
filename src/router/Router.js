import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

export default function AppRouter() {
  return (
    <Router>
        <Suspense fallback="<div>loading...</div>">
          <Switch>
            <Route path="/" component={LandingPage} exact />
          </Switch>
        </Suspense>
    </Router>
  );
}