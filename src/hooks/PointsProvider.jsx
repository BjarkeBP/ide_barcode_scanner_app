import React, { createContext, useState, useContext } from "react";

// Create the context object
const PointsContext = createContext();

// Custom hook for accessing the context easily
export const usePoints = () => useContext(PointsContext);

// Provider component that will wrap part or all of your application
export const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState(0); // Initialize points to zero

  // Function to increment points by a specific number
  const addPoints = (num) => {
    setPoints((prevPoints) => prevPoints + num);
  };

  // Function to decrement points by a specific number
  const removePoints = (num) => {
    setPoints((prevPoints) => prevPoints - num);
  };

  // The context value that will be supplied to any descendants of this provider
  const value = { points, addPoints, removePoints };

  return (
    <PointsContext.Provider value={value}>{children}</PointsContext.Provider>
  );
};
