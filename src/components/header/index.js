import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./navbar";

const index = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default index;
