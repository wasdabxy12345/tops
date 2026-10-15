// Explain in your own words (3-4 lines) how React's Virtual DOM makes updating the UI faster compared to traditional
// DOM manipulation.

import React from "react";

function S1Q4() {
  return (
    <div>
      <p>
        React keeps a copy of the virtual DOM in memory. When any state is
        supposed to be changed, it compares the new virtual tree against the old
        one using a diffing algorithm to find the differences. It then applies
        all these updates to the real DOM all at once instead of updating the
        entire DOM everytime there is a state change.
      </p>
    </div>
  );
}

export default S1Q4;
