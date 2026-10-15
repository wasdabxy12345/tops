// Convert the UserGreeting functional component into a class component named UserGreetingClass that also takes a
// username prop and displays the same greeting. Render both versions (functional and class) in App.js to compare.

import React, { Component } from "react";

export class S2Q3 extends Component {
  render() {
    return (
      <div>
        <p>Hello, {this.props.username}!</p>{" "}
      </div>
    );
  }
}

export default S2Q3;
