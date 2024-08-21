import React from "react";
import NavigationBar from "../Components/NavigationBar";
import AirDrpo from "../assets/Svg/AirDrop.svg";
import threeStar from "../assets/Svg/teenyicons_star-solid-1.svg";
import CardArea from "../Components/CardArea";
import AccordionData from "../Components/Accordion";
import RightArrow from "../assets/Svg/RightArrow.svg";

const HomeMobile = () => {
  return (
    <>
      <div className="Mobile-home-body">
        <span className="d-flex align-items-center justify-content-center pt-5">
          <img src={AirDrpo} alt="" width={400} />
        </span>
        <div className="card-section">
          <div className="d-flex align-items-center justify-content-center">
            <div className="text-area-div">
              <div className="d-flex align-items-center justify-content-between px-3">
                <img src={threeStar} alt="" width={20} />
                <p className="text-main-title">Reel Deal Monthly Movies</p>
                <img src={threeStar} alt="" width={20} />
              </div>
              <p className="text-submain-title">
                Your Flexible Monthly Membership to the latest Movies
              </p>
            </div>
          </div>
        </div>
        <CardArea />

        <div className="container px-4">
          <h2 className="fw-bold text-white my-4">
            What is MVP Subscription ?
          </h2>
          <div class="v-progress">
            <ul>
              <li class="v-progress-item">
                <div class="circle">1</div>
                <span class="text">
                  MVP Subscription provides the member 1 Movie cradit per month
                </span>
              </li>
              <li class="v-progress-item">
                <div class="circle">2</div>
                <span class="text">
                  They can avail it any Marcus theater on Movie Tavern
                </span>
              </li>
              <li class="v-progress-item">
                <div class="circle">3</div>
                <span class="text">
                  Members Earn 1000 points and get $5 reward redeemable on food
                  & beverages + many more Benefits
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-black pb-5">
          <AccordionData />
        </div>

        <div className="container footer-stick-button position-fixed bottom-0 z-3 px-3 py-3">
          <a href="#" className="btn-start justify-content-center">
            Get Started <img src={RightArrow} alt="" width={20} />
          </a>
          <p className="text-white">Lorem ipsum dolor sit amet only mobile</p>
        </div>
      </div>
    </>
  );
};

export default HomeMobile;
