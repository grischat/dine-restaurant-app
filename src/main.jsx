import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Booking from "./Booking.jsx";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/dine-restaurant-app" element={<App />}/>
        <Route path="/booking" element={<Booking />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
