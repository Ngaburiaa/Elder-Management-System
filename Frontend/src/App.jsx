import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Billing from "./Components/Billing";
import CareGiverActivities from "./Components/CareGiverActivities";
import Dashboard from "./Components/Dashboard";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Profile from "./Components/Profile";
import Report from "./Components/Reports";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="services" element={<Services />} />
            <Route path="billing" element={<Billing />} />
            <Route path="CareGiverActivities" element={<CareGiverActivities />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Report" element={<Report/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

