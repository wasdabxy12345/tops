// Write a functional component called UserGreeting that takes a username prop and displays 'Hello, {username}!' using
// JSX. Render it in App.js with your own name as the username.

import React from "react";

function S2Q2({ username }) {
  return (
    <div>
      <p>Hello, {username}!</p>
    </div>
  );
}

export default S2Q2;
