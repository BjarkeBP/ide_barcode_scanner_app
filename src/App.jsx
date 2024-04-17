import React from "react";
import Navbar from "./comps/navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This component is where child routes will render */}
    </div>
  );
};

export default App;
