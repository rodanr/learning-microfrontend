import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import { ErrorBoundary } from "react-error-boundary";
const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
      <Header />
    </ErrorBoundary>
    <div className="my-10">Home Page Content</div>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Footer />
    </React.Suspense>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
