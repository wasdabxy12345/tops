// Write a functional component called UserGreeting that takes a username prop and displays 'Hello, {username}!' using
// JSX. Render it in App.js with your own name as the username.

import React from "react";

function UserGreeting({ username }) {
  return (
    <div>
      <h6>Hello, {username}!</h6>
    </div>
  );
}

export default UserGreeting;
