import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import { ErrorBoundary } from "react-error-boundary";
import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import "remixicon/fonts/remixicon.css";

const App = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <ErrorBoundary fallback={<h2>Something went wrong!</h2>}>
        <Header appMeta={{ appName: "PDP" }} />
      </ErrorBoundary>
      <div className="my-10">
        <Switch>
          <Route path="/products/:productId" component={PDPContent} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
