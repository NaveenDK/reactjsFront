import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route } from "react-router-dom";
// Stylesheet
import "./index.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Error404 from "./components/Error404";

const Root = () => {
  return (
      <div>
          <Switch>
              <Route exact path="/" component={App} />
             
          </Switch>
      </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
   
    <Route render={({ location }) => (location.state && location.state.is404 ? <Error404 /> : <Root />)} />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
