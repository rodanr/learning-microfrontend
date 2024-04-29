import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import {ErrorBoundary} from "react-error-boundary";
import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";

const App = () => (
    <div className="text-3xl mx-auto max-w-6xl">
        <ErrorBoundary fallback={<h2>Something went wrong!</h2>}>
            <Header appMeta={{appName: "PDP"}}/>
        </ErrorBoundary>
        <div className="my-10">
            <PDPContent/>
        </div>
        <Footer/>
    </div>
);

ReactDOM.render(<App/>, document.getElementById("app"));
