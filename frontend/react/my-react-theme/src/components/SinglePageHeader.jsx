import React from "react";
import { Link } from "react-router-dom";

function SinglePageHeader({ title }) {
  return (
    <div>
      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">404 Error</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">Pages</Link>
          </li>
          <li className="breadcrumb-item active text-white">{title}</li>
        </ol>
      </div>
      {/* Single Page Header End */}
    </div>
  );
}

export default SinglePageHeader;
