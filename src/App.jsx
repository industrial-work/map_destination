import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Service, SingleService, SinglePlace } from './components'
import Layout from "./layout";
import "./App.css";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  path="" element={<Home/>} />
          <Route  path="services" element={<Service/>} />
          <Route  path="SelectedArea" element={<SinglePlace/>} />
          <Route  path="services/individual" element={<SingleService/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;