// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Feedback from "./pages/Feedback";
import Footer from "./components/Footer";
import defaultConfig from "./pages/defaultConfig";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/defaultConfig" element={<defaultConfig />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
