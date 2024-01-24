import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./utils/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
