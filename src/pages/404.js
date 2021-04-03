import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <div>
      <h1>page not found</h1>
      <Link to="/">go home</Link>
    </div>
  );
};

export default NotFoundPage;
