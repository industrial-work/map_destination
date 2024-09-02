import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './components'
import Layout from "./layout";
import "./App.css";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;