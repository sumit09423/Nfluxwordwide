import React from "react";
import NavigationBar from "../Components/NavigationBar";
import backgroundImage from "../assets/Images/Background.png"; // Assuming you're using Webpack to load images
import threeStar from "../assets/Svg/teenyicons_star-solid-1.svg";
import CardArea from "../Components/CardArea";
import RightArrow from "../assets/Svg/RightArrow.svg";
import AccordionData from "../Components/Accordion";
import MediaQuery from "react-responsive";
import HomeMobile from "./Home.mobile";

const HomeView = () => {
  return (
    <>
      <MediaQuery minWidth={1000}>
        <div>
          {/* Header */}
          <NavigationBar />

          {/* Main Content */}
          <main>
            <div className="position-relative">
              <img
                src={backgroundImage}
                alt="Background"
                className="img-fluid object-fit-cover"
              />

              {/* Text Overlay */}
              <div className="container text-overlay d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-white display-4 d-flex gap-5">
                  <span className="letter-spacing-tight fw-bold">M V P</span>
                  <span className="letter-spacing-tight fw-bold">
                    S U B S C R I P T I O N
                  </span>
                </h1>
                <p className="text-white letter-spacing-loose fw-light">
                  You go to Movie Membership Program
                </p>
              </div>
            </div>

            {/* Section Realted to Card */}
            <div className="card-section">
              <div className="container py-5 px-5">
                <div className="row">
                  <div className="col-md-5">
                    <div className="text-area-div">
                      <span>
                        <img src={threeStar} alt="" width={20} />
                        <img src={threeStar} alt="" className="pb-4" />
                        <img src={threeStar} alt="" width={20} />
                      </span>
                      <p className="text-main-title">
                        Reel Deal Monthly Movies
                      </p>
                      <p className="text-submain-title">
                        Your Flexible Monthly Membership to the latest Movies
                      </p>
                    </div>
                    <div className="mt-2">
                      <h2 className="fw-bold text-white my-4">
                        What is MVP Subscription ?
                      </h2>
                      <div class="v-progress">
                        <ul>
                          <li class="v-progress-item">
                            <div class="circle">1</div>
                            <span class="text">
                              MVP Subscription provides the member 1 Movie
                              cradit per month
                            </span>
                          </li>
                          <li class="v-progress-item">
                            <div class="circle">2</div>
                            <span class="text">
                              They can avail it any Marcus theater on Movie
                              Tavern
                            </span>
                          </li>
                          <li class="v-progress-item">
                            <div class="circle">3</div>
                            <span class="text">
                              Members Earn 1000 points and get $5 reward
                              redeemable on food & beverages + many more
                              Benefits
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-2 d-flex align-items-center justify-content-center gap-4">
                      <a href="#" className="btn-start ">
                        Get Started <img src={RightArrow} alt="" width={20} />
                      </a>
                      <a href="#" className="text-white">
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <CardArea />
                  </div>
                </div>
              </div>
            </div>

            {/* Accrodian Section  */}

            <div className="bg-black">
              <AccordionData />
            </div>
          </main>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <HomeMobile />
      </MediaQuery>
    </>
  );
};

export default HomeView;
