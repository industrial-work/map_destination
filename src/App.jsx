import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Service,
  // SingleService,
  SinglePlace,
  SelectedPackage,
} from "./components";
import Layout from "./layout";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="selected-area" element={<SinglePlace />} />
          <Route path="services" element={<Service />} />
          <Route path="selected-package" element={<SelectedPackage />} />
          {/* <Route  path="services/individual" element={<SingleService/>} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
