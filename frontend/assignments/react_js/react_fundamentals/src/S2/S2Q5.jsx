// Refactor your MiniProfile component to ensure all JSX tags are properly closed and wrapped, and that no invalid HTML
// is used.<br><br><em><strong>Hint:</strong> If you get any errors, check for missing tag closures or incorrect nesting
// in your JSX.</em>

import React from "react";
import "react-bootstrap";

function S2Q5({ displayPicture, name, statusMessage }) {
  return (
    <div className="col-md-3">
      <div className="p-1 card">
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

export default S2Q5;
