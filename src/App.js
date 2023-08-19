import * as React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FullLayout from "./components/full-layout/FullLayout";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<FullLayout />} />
    </Routes>
  );
}

export default App;
