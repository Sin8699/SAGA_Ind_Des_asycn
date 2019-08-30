import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

var App = props => {
  return (
    <div>
      <button onClick={() => props.dispatch({ type: "INCREMENT_ASYNC" })}>
        Increment after 3 second
      </button>
      <button onClick={() => props.dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => props.dispatch({ type: "DECREMENT" })}>Decrement</button>
      <hr />
      <div>Clicked: {props.value} times</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { value: state };
};

export default connect(mapStateToProps)(App);
