import React from "react";
import HomeView from "./View/HomeView";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS (includes Popper.js)

const App = () => {
  return (
    <>
      {/* Hear is a main View Render */}
      <HomeView />
    </>
  );
};

export default App;
