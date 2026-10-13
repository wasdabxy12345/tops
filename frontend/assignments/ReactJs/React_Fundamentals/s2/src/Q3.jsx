// Convert the UserGreeting functional component into a class component named UserGreetingClass that also takes a
// username prop and displays the same greeting. Render both versions (functional and class) in App.js to compare.

import React, { Component } from "react";

export class UserGreetingClass extends Component {
  render() {
    return (
      <div>
        <h6>Hello, {this.props.username}!</h6>{" "}
      </div>
    );
  }
}

export default UserGreetingClass;
