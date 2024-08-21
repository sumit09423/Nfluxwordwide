import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "../Components/NavigationBar";
import HomeView from "../View/HomeView";
import MvpSubscription from "../View/MvpSubscription";
import ConfirmationPage from "../View/Confermation";

const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          {/* HomePageView */}
          <Route path="/" element={<HomeView />} />
          {/* BookingProcessPage */}
          <Route path="/MvpSubscription" element={<MvpSubscription />} />
          {/* Confermaiton page */}
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoute;
