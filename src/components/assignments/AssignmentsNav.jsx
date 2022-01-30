import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

import React from 'react';

const AssignmentsNav = () => {
  return (
    <div style={{ paddingTop: 80, paddingLeft:20 }}>
      <div className= "mt-3">

      {/* <nav >
        <Link to="/assignments/1">Assignment 1</Link>
        <Link to="/assignments/2">Assignment 2</Link>
        <Link to="/assignments/3">Assignment 3</Link>

      </nav> */}
      <Outlet />
    </div>
    </div>
  );
};

export default AssignmentsNav;
