import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ScannerPage from "./pages/scannerPages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", // Assuming you want this at the root
    element: <App />,
    children: [
      {
        path: "ide_barcode_scanner_app/", // Assuming you want this at the root
        element: <ScannerPage />,
      },
      {
        path: "ide_barcode_scanner_app/shop", // Assuming you want this at the root
        element: <div>shop</div>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
