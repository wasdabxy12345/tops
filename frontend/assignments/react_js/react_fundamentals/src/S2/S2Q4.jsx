// Build a MiniProfile functional component that shows a user's display picture (use any image URL), name, and a short
// status message using JSX. Use this component to display your own mini profile like Instagram.

import React from "react";
import "react-bootstrap";

function S2Q4({ displayPicture, name, statusMessage }) {
  return (
    <div className="col-md-3">
      <div className="card p-2">
        <div className="ratio ratio-1x1">
          <img
            src={displayPicture}
            alt=""
            className="w-100 h-100 object-fit-cover"
          />
        </div>
        <h5>{name}</h5>
        <p>{statusMessage}</p>
      </div>
    </div>
  );
}

export default S2Q4;
