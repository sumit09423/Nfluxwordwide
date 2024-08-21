import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cardImg from "../assets/Images/Asset-1.png";
// import annual from "../assets/Svg/icon-3.svg";
import cinema from "../assets/Svg/icon-8.svg";
import cal from "../assets/Svg/icon-2.svg";
import right from "../assets/Svg/icon-5.svg";

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { formData } = location.state || {}; // Retrieve the data

  if (!formData) {
    // If no data is found, redirect to the home page
    navigate("/");
    return null;
  }

  const handleBackToHome = () => {
    navigate("/"); // Navigate to home
  };

  return (
    <div className="confirmation-container">
      <div className="container">
        <div className="row gap-5">
          {/* Left Column */}
          <div className="col-md-4">
            <div className="confirmation-content d-flex flex-column">
              <img src={cardImg} alt="Card" className="card-image" />
              <div className="px-4 w-100">
                <div className="mt-2 ticket-container pb-2">
                  <p className="ticket-title m-0">MVP Subscription</p>
                </div>
                <ul className="ticket-container pb-3 p-0">
                  <li>
                    {/* <img src={annual} alt="" /> */}
                    {formData.subscriptionType}
                  </li>
                  <li>
                    <img src={cinema} alt="" />
                    Horizon Village Cinema
                  </li>
                  <li>
                    <img src={cal} alt="" />
                    Sunday 25 Feb
                  </li>
                </ul>
                <div>
                  <ul className="d-flex w-100 justify-content-between container-mail p-0">
                    <li className="d-flex flex-column">
                      <span>Email</span>
                      <span>{formData.email}</span>
                    </li>
                    <li className="d-flex flex-column">
                      <span>MMR Number</span>
                      <span>240002115748854</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="col-md-5">
            <div className="d-flex gap-2 mb-2">
              <img src={right} alt="" className="mt-1" />
              <p className="p-0 m-0 d-flex flex-column align-items-start confert-title">
                MVP SUBSCRIPTION ACTIVE
                <span>ORDER #WK3JH8K</span>
              </p>
            </div>
            <div className="mt-5 ">
              <div className="billing-cycle mb-2">
                <p className="mb-3 p-0 fw-bold">BILLING CYCLE</p>
                <p className="mb-3 p-0 d-flex justify-content-between">
                  <span>Annual</span>
                  <p>${formData.subscriptonPrice}</p>
                </p>
              </div>
              <div className="border-bottom mb-3 border-white d-flex justify-content-between align-items-center">
                <p className="d-flex flex-column pt-2 ">
                  <span>Convenience Fee</span>
                  <span>Tax applied wherever applicable</span>
                </p>
                ${formData.convenienceFee}
              </div>
              <div className="d-flex justify-content-between">
                <p>TOTAL</p>
                <p>${formData.totalAmount}</p>
              </div>
            </div>
            <div className="bg-black payment">
              <p className="m-0 p-0 text-uppercase fw-bold">Payment Summary</p>
              <ul className="m-0 p-0 pt-2 d-flex justify-content-between">
                <li className="d-flex flex-column m-0 p-0">
                  <span>Credit Card</span>
                  <span>{formData.cardNumber}</span>
                </li>
                <li>
                  <p>${formData.totalAmount}</p>
                </li>
              </ul>
            </div>
            {/* Back to Home Button */}
            <div className="mt-4">
              <button className="btn btn-primary" onClick={handleBackToHome}>
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
