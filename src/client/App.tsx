import React from "react";
import TopPage from "./components/Pages/Top";
import {BrowserRouter as Router, Route } from "react-router-dom"
import DetailPage from "./components/Pages/Detail";

const app = (): JSX.Element => {
  return (
    <>
      <Router>
        <Route exact path="/" component={TopPage} />
        <Route path="/Detail" component={DetailPage} />
      </Router>
    </>
  );
};

export default app;
