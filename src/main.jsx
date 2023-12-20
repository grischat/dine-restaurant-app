import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Booking from "./Booking.jsx";
import "./index.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/dine-restaurant-app" element={<App />}/>
        <Route path="/booking" element={<Booking />}/>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
