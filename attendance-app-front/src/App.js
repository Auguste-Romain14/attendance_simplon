import React from "react";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <div className="py-3">
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liste" element={<List />} />
      </Routes>
    </div>
  );
};

export default App;
