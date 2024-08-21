import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cardImg from "../assets/Images/Asset-1.png";
import annual from "../assets/Svg/icon-3.svg";
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
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5 8.5C15.5 13 12.2075 16 8.1455 16C4.844 16 2.18 14.2487 1.25 11.5M0.5 8.5C0.5 4 3.7925 1 7.85525 1C11.156 1 13.8185 2.75125 14.75 5.5"
                        stroke="white"
                        stroke-width="0.984375"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.25 12.25L1.25 11.5L0.5 14.5M11.75 4.75L14.75 5.5L15.5 2.5"
                        stroke="white"
                        stroke-width="0.984375"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.4143 9.74525C10.4143 10.0827 10.3299 10.4 10.1611 10.697C9.99913 10.994 9.75613 11.2437 9.43213 11.4462C9.11488 11.6487 8.73688 11.7703 8.29813 11.8108V12.6309H7.64V11.8108C7.0055 11.75 6.4925 11.5509 6.101 11.2134C5.7095 10.8759 5.51375 10.4304 5.51375 9.87687H6.749C6.76925 10.1401 6.85363 10.3595 7.00213 10.535C7.15063 10.7037 7.36325 10.8117 7.64 10.859V8.6315C7.18775 8.51675 6.81988 8.402 6.53638 8.28725C6.25288 8.16575 6.00988 7.97675 5.80738 7.72025C5.61163 7.46375 5.51375 7.11275 5.51375 6.66725C5.51375 6.107 5.7095 5.64462 6.101 5.28012C6.4925 4.90887 7.0055 4.69287 7.64 4.63212V3.812H8.29813V4.63212C8.89213 4.68612 9.368 4.87512 9.72575 5.19912C10.0903 5.51637 10.2961 5.95512 10.3434 6.51537H9.10813C9.08788 6.30612 9.00688 6.1205 8.86513 5.9585C8.72338 5.78975 8.53438 5.675 8.29813 5.61425V7.80125C8.75038 7.90925 9.11825 8.024 9.40175 8.1455C9.68525 8.26025 9.92488 8.44587 10.1206 8.70237C10.3164 8.95212 10.4143 9.29975 10.4143 9.74525ZM6.68825 6.6065C6.68825 6.88325 6.76925 7.09925 6.93125 7.2545C7.1 7.40975 7.33625 7.53462 7.64 7.62912V5.58387C7.34975 5.61762 7.11688 5.72225 6.94138 5.89775C6.77263 6.07325 6.68825 6.3095 6.68825 6.6065ZM8.29813 10.859C8.59513 10.8117 8.828 10.6936 8.99675 10.5046C9.1655 10.3089 9.24988 10.076 9.24988 9.806C9.24988 9.536 9.1655 9.32675 8.99675 9.17825C8.83475 9.023 8.60188 8.89812 8.29813 8.80362V10.859Z"
                        fill="white"
                      />
                    </svg>
                    {formData.subscriptionType}
                  </li>
                  <li>
                    {/* <img src={cinema} alt="" /> */}
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0.78853C9.86857 0.78853 11.6606 1.53082 12.9819 2.8521C14.3032 4.17337 15.0455 5.96541 15.0455 7.83398C15.0455 10.7064 12.8446 13.8407 8.22727 17.3037C8.1617 17.3529 8.08196 17.3794 8 17.3794C7.91804 17.3794 7.83829 17.3529 7.77273 17.3037C3.15536 13.8407 0.954545 10.7064 0.954545 7.83398C0.954545 5.96541 1.69683 4.17337 3.01811 2.8521C4.33939 1.53082 6.13143 0.78853 8 0.78853ZM8 4.87944C7.21641 4.87944 6.46491 5.19072 5.91082 5.74481C5.35674 6.29889 5.04545 7.05039 5.04545 7.83398C5.04545 8.61758 5.35674 9.36908 5.91082 9.92316C6.46491 10.4772 7.21641 10.7885 8 10.7885C8.78359 10.7885 9.53509 10.4772 10.0892 9.92316C10.6433 9.36908 10.9545 8.61758 10.9545 7.83398C10.9545 7.05039 10.6433 6.29889 10.0892 5.74481C9.53509 5.19072 8.78359 4.87944 8 4.87944Z"
                        stroke="white"
                        stroke-width="0.909091"
                      />
                    </svg>
                    Horizon Village Cinema
                  </li>
                  <li>
                    {/* <img src={cal} alt="" /> */}
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.01515 3.82963L6.01515 4.66276V4.84458H5.83333H4.16969L4.05163 4.84851C3.67946 4.87743 3.33178 5.04548 3.0779 5.31927C2.82318 5.59395 2.6817 5.95476 2.68182 6.32937L2.68182 6.32943V16.3264L2.68575 16.4445C2.71467 16.8166 2.88272 17.1643 3.15651 17.4182C3.43119 17.6729 3.792 17.8144 4.16661 17.8143H4.16667H15.8303L15.9484 17.8103C16.3205 17.7814 16.6682 17.6134 16.9221 17.3396C17.1768 17.0649 17.3183 16.7041 17.3182 16.3295V16.3294V6.33245L17.3142 6.21439C17.2853 5.84222 17.1173 5.49454 16.8435 5.24066C16.5688 4.98594 16.208 4.84446 15.8334 4.84458H15.8333H14.1667H13.9848V4.66276V3.83486L13.9797 3.74833C13.96 3.59173 13.8842 3.44751 13.7662 3.34256C13.6469 3.23652 13.4929 3.17794 13.3333 3.17791L6.01515 3.82963ZM6.01515 3.82963C6.01515 3.82957 6.01515 3.8295 6.01515 3.82944C6.01515 3.82943 6.01515 3.82943 6.01515 3.82943C6.01539 3.66344 6.07897 3.5038 6.19292 3.3831C6.30691 3.26235 6.46271 3.18969 6.62848 3.17996C6.79426 3.17022 6.95749 3.22416 7.08483 3.33074C7.21089 3.43625 7.29236 3.58547 7.31301 3.74844M6.01515 3.82963L7.31301 3.74844M7.31301 3.74844L7.31818 3.83487V4.66276V4.84458H7.5H12.5H12.6818V4.66276V3.82943C12.6818 3.65663 12.7505 3.49092 12.8726 3.36874C12.9948 3.24656 13.1605 3.17792 13.3333 3.17791L7.31301 3.74844ZM16.0152 10.4961V10.3143H15.8333H4.16667H3.98485V10.4961V16.3294V16.5112H4.16667H15.8333H16.0152V16.3294V10.4961ZM16.0152 6.32943V6.14761H15.8333H4.16667H3.98485V6.32943V8.82943V9.01124H4.16667H15.8333H16.0152V8.82943V6.32943Z"
                        fill="white"
                        stroke="black"
                        stroke-width="0.363636"
                      />
                    </svg>
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
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 12.6111L8.92308 17.5L20 6.5"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
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
