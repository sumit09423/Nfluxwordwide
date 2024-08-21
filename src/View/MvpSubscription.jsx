import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import stateCities from "../assets/stateCities.json"; // Adjust the path as necessary
import billingPlans from "../assets/stateCities.json"; // Adjust the path as necessary
import check from "../assets/Svg/check.svg";
import card from "../assets/Svg/icon-6.svg";
import { useNavigate } from "react-router-dom"; // Add this import

const MvpSubscription = () => {
  const [step, setStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState(""); // Added

  const convenienceFee = import.meta.env.VITE_CONVENIENCE_FEE;

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [renewalConsent, setRenewalConsent] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  // Check if all required fields have values and checkboxes are checked
  const isFormValid = () =>
    termsAccepted &&
    renewalConsent &&
    cardNumber &&
    cardHolder &&
    expiryDate &&
    cvv;

  const handlePayment = () => {
    if (isFormValid()) {
      // Calculate the total amount
      const totalAmount = (
        parseFloat(selectedPlan ? selectedPlan.price_per_month : 109.89) +
        parseFloat(convenienceFee)
      ).toFixed(2);

      // Collect the data to be passed
      const formData = {
        subscriptionType: selectedPlan ? selectedPlan.name : "Not selected",
        email,
        billingCycle: selectedPlan ? selectedPlan.name : "Not selected",
        cardNumber,
        subscriptonPrice: selectedPlan
          ? selectedPlan.price_per_month
          : "109.89",
        convenienceFee,
        totalAmount,
      };

      // Navigate to the confirmation page with state
      navigate("/confirmation", { state: { formData } });
    } else {
      alert("Please fill out all fields and accept all terms and conditions.");
    }
  };

  useEffect(() => {
    if (searchTerm) {
      const results = stateCities.filter((city) =>
        city.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCities(results);
    } else {
      setFilteredCities([]);
    }
  }, [searchTerm]);

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setUserName(""); // Example: Set user's name here
    setSearchTerm(""); // Clear search input
    setFilteredCities([]); // Clear dropdown
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setUserName(""); // Example: Set user's name here
  };

  const handleSaveNext = () => {
    if (step === 1 && selectedCity) {
      nextStep();
    } else if (step === 2 && selectedPlan) {
      nextStep();
    } else if (step === 3 && email && password) {
      setUserName(email.split("@")[0]); // Example: Use part of the email as a placeholder name
      localStorage.setItem("userEmail", email);
      nextStep();
    } else if (step === 4 && termsAccepted) {
      // Navigate to confirmation page or perform payment logic here
      nextStep();
    }
  };

  const isStep3Valid = () => {
    return email.includes("@") && password.length > 0;
  };

  return (
    <div className="main-container min-vh-100 d-flex align-items-center justify-content-center">
      <main className="container">
        <div className="row text-white items-center justify-content-center mt-5 ">
          {/* Progress Tracker */}
          <div className="col-md-6">
            <div>
              <h2 className="fw-bold">MVP Subscription</h2>
              <p className="fw-bold text-light-cust">
                Your go-to Movie Membership Program{" "}
              </p>
            </div>
            <div className="custom-v-progress">
              <ul>
                <li
                  className={`custom-v-progress-item ${
                    step > 1
                      ? "custom-completed"
                      : step === 1
                      ? "custom-inprogress"
                      : ""
                  }`}
                >
                  <p className="p-0 m-0 d-flex flex-column">
                    <span className="step-subs m-0">STEP 1</span>
                    <span className="sub-title m-0">
                      {selectedCity
                        ? `${selectedCity.city}, ${selectedCity.state}`
                        : "Pick Your Theatre"}
                    </span>
                  </p>
                </li>
                <li
                  className={`custom-v-progress-item ${
                    step === 2
                      ? "custom-inprogress"
                      : step > 2
                      ? "custom-completed"
                      : ""
                  }`}
                >
                  <p className="p-0 m-0 d-flex flex-column">
                    <span className="step-subs m-0 uppercase">
                      SELECT BILLING CYCLE
                    </span>
                    <span className="sub-title m-0">
                      {selectedPlan ? selectedPlan.name : "Pick Your Plan"}
                    </span>
                  </p>
                </li>
                <li
                  className={`custom-v-progress-item ${
                    step === 3
                      ? "custom-inprogress"
                      : step > 3
                      ? "custom-completed"
                      : ""
                  }`}
                >
                  <p className="p-0 m-0 d-flex flex-column">
                    <span className="step-subs m-0">Login</span>
                    <span className="sub-title m-0">
                      {userName ? `Welcome, ${userName}` : "Login & Sign Up"}
                    </span>
                  </p>
                </li>
                <li
                  className={`custom-v-progress-item ${
                    step === 4 ? "custom-inprogress" : ""
                  }`}
                >
                  <p className="p-0 m-0 d-flex flex-column">
                    <span className="step-subs m-0">CHECKOUT</span>
                    <span className="sub-title m-0">Select Payment Method</span>
                  </p>
                </li>
              </ul>
            </div>

            {/* Summary Section - Only Visible in Step 4 */}
            {step === 4 && (
              <div className="mt-5 w-75">
                <div className="billing-cycle mb-2">
                  <p className="mb-3 p-0 fw-bold">BILLING CYCLE</p>
                  <p className="mb-3 p-0 d-flex justify-content-between">
                    <span>{selectedPlan ? selectedPlan.name : "Annual"}</span>
                    <span>
                      ${selectedPlan ? selectedPlan.price_per_month : "109.89"}
                    </span>
                  </p>
                </div>
                <div className="border-bottom mb-3 border-white d-flex justify-content-between align-items-center">
                  <p className="d-flex flex-column pt-2 ">
                    <span>Convenience Fee</span>
                    <span>Tax applied wherever applicable</span>
                  </p>
                  <p>${convenienceFee}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>TOTAL</p>
                  <p>
                    $
                    {(
                      parseFloat(
                        selectedPlan ? selectedPlan.price_per_month : 109.89
                      ) + parseFloat(convenienceFee)
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Form Section */}
          <div className="col-md-6 tabing-container px-5 py-5 d-flex flex-column justify-content-between">
            <div className="tabing-section-tittle">
              <p>STEP {step}/4</p>
              <p>
                {step === 1
                  ? "Pick Your Favourite Marcus Theatre"
                  : step === 2
                  ? "Select Your Billing Plan"
                  : step === 3
                  ? "Login to redeem rewards"
                  : step === 4}
              </p>
            </div>
            <div className="body-tabing">
              {step === 1 && (
                <div className="dropdown-container">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a city..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  {filteredCities.length > 0 && (
                    <ul className="dropdown-menu-cust">
                      {filteredCities.map((city, index) => (
                        <li
                          key={index}
                          className="dropdown-item"
                          onClick={() => handleCitySelect(city)}
                        >
                          {city.city}, {city.state}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              {step === 2 && (
                <div className="mt-5 mb-5">
                  {billingPlans.map((plan, index) => (
                    <div
                      key={index}
                      className={`billing-plan ${
                        selectedPlan === plan ? "selected" : ""
                      }`}
                    >
                      <label className="rounded-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedPlan === plan}
                          onChange={() => handlePlanSelect(plan)}
                        />
                        <span className="checkmark">
                          {selectedPlan === plan && (
                            <img src={check} alt="Selected" />
                          )}
                        </span>
                        <div className="plan-details d-flex flex-column">
                          <h5>{plan.name}</h5>
                          <p>
                            <span className="price-per-month">
                              ${plan.price_per_month}
                            </span>
                            /mo
                          </p>
                          <p>{plan.description}</p>
                          {plan.label && (
                            <p className="plan-label">{plan.label}</p>
                          )}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              )}
              {step === 3 && (
                <div className="login-form">
                  <p className="py-1 mt-1 mb-1">
                    Don’t have an account? You can enroll in the next step
                  </p>
                  <p className="py-1 mt-1 mb-1">
                    Welcome, {userName || "Guest"}{" "}
                  </p>
                  <label htmlFor="email" className="mt-3">
                    Email Address or MMR number{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="password" className="mt-2">
                    Password{" "}
                  </label>
                  <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              )}
              {step === 4 && (
                <div className="checkout-summary">
                  <div className="my-4">
                    <p className="t-M">Terms & Conditions*</p>
                    <label className="terms-conditions">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                      />{" "}
                      I accept the terms and conditions
                    </label>
                  </div>
                  <div className="my-4">
                    <p className="step-4-title">
                      <span className="me-2">
                        <img src={card} alt="Credit Card" width={30} />
                      </span>
                      Credit / Debit Card
                    </p>
                  </div>
                  <div className="card-details">
                    <div className="mb-3">
                      <label htmlFor="cardNumber" className="form-label">
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardNumber"
                        placeholder="1234 5678 9123 4567"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Card number is required.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="cardHolder" className="form-label">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardHolder"
                        placeholder="John Doe"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Cardholder name is required.
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="expiryDate" className="form-label">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="expiryDate"
                          placeholder="MM/YY"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                          required
                        />
                        <div className="invalid-feedback">
                          Expiry date is required.
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cvv" className="form-label">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cvv"
                          placeholder="123"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          required
                        />
                        <div className="invalid-feedback">CVV is required.</div>
                      </div>
                    </div>
                    <label className="terms-conditions">
                      <input
                        type="checkbox"
                        checked={renewalConsent}
                        onChange={(e) => setRenewalConsent(e.target.checked)}
                      />{" "}
                      I Agree to consent to use the same card for renewals Learn
                      More
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className="tabing-footer mt-3">
              {step > 1 && step !== 3 && step !== 4 && (
                <button className="btn btn-secondary me-2" onClick={prevStep}>
                  Back
                </button>
              )}
              {(step === 1 && (
                <button
                  className="btn btn-primary"
                  onClick={handleSaveNext}
                  disabled={!selectedCity}
                >
                  Save & Next
                </button>
              )) ||
                (step === 2 && (
                  <button
                    className="btn btn-primary"
                    onClick={handleSaveNext}
                    disabled={!selectedPlan}
                  >
                    Save & Next
                  </button>
                )) ||
                (step === 3 && (
                  <button
                    className="btn btn-primary w-100"
                    onClick={handleSaveNext}
                    disabled={!isStep3Valid()}
                  >
                    Send Login Code
                  </button>
                )) ||
                (step === 4 && (
                  <button
                    className="btn btn-primary w-100"
                    disabled={!isFormValid()}
                    onClick={handlePayment}
                  >
                    Complete Payment
                  </button>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MvpSubscription;
