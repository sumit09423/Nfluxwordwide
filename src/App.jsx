import React from "react";
import HomeView from "./View/HomeView";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS (includes Popper.js)
import AppRoute from "./AppRoute/AppRoute";

const App = () => {
  return (
    <>
      {/* In this we are rendering only the Approute  */}
      <AppRoute />
    </>
  );
};

export default App;
