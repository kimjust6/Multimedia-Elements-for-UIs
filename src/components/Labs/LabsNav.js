import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import React from "react";

const LabsNav = () => {
  return (
    <div style={{ paddingTop: 80, paddingLeft:20 }}>
      {/* <nav>
        <Link to="/labs/1">Lab 1</Link>
        <Link to="/labs/2">Lab 2</Link>
        <Link to="/labs/3">Lab 3</Link>
        <Link to="/labs/4">Lab 4</Link>
        <Link to="/labs/5">Lab 5</Link>
      </nav> */}
      <Outlet />
    </div>
  );
};

export default LabsNav;
