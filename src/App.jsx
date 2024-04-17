import React from "react";
import Navbar from "./comps/navbar";
import { Outlet } from "react-router-dom";
import { PointsProvider } from "./hooks/PointsProvider";

const App = () => {
  return (
    <div>
      <PointsProvider>
        <Navbar />
        <Outlet /> {/* This component is where child routes will render */}
      </PointsProvider>
    </div>
  );
};

export default App;
