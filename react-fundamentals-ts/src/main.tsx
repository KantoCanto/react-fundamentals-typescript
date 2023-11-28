//react imports
import React from "react";
import ReactDOM from "react-dom/client";
//import { createBrowserRouter } from "react-router-dom";

//app import
import { App } from "./App.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);

const rootElement = document.getElementById("root")!;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
