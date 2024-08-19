import React from "react";
import Ticket from "../assets/Svg/creditPerMonth.svg";
import Rollover from "../assets/Svg/rolloverOfUnusedCredits.svg";
import MediaQuery from "react-responsive";

const CardArea = () => {
  return (
    <div>
      <MediaQuery minWidth={1000}>
        <div className="row">
          <div className="row gap-2">
            <div className="col-md-4 bg-card">
              <img
                src={Ticket}
                alt=""
                srcset=""
                width={50}
                height={50}
                className=" pb-3"
              />
              <p className="bg-card-title">1 Cradit per Month </p>
              <p className="bg-card-description">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-md-4 bg-card">
              <img
                src={Rollover}
                alt=""
                srcset=""
                width={50}
                height={50}
                className=" pb-3"
              />
              <p className="bg-card-title">Free rollover of unused cradits </p>
              <p className="bg-card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-md-3 bg-card">
              <img
                src={Ticket}
                alt=""
                srcset=""
                width={50}
                height={50}
                className=" pb-3"
              />
              <p className="bg-card-title">1 Cradit per Month </p>
              <p className="bg-card-description">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="row gap-2 mt-3">
            <div className="col-md-3 bg-card">
              <img
                src={Ticket}
                alt=""
                srcset=""
                width={50}
                height={50}
                className=" pb-3"
              />
              <p className="bg-card-title">100% Flexible </p>
              <p className="bg-card-description">Lorem ipsum dolor</p>
            </div>
            <div className="col-md-4 bg-card">
              <img
                src={Rollover}
                alt=""
                srcset=""
                width={50}
                height={50}
                className=" pb-3"
              />
              <p className="bg-card-title">
                20% dicount on all foods and beverages{" "}
              </p>
              <p className="bg-card-description">Lorem ipsum dolor</p>
            </div>
            <div className="col-md-4 bg-card">
              <img
                src={Ticket}
                alt=""
                srcset=""
                width={50}
                height={50}
                className=" pb-3"
              />
              <p className="bg-card-title">0 Convenience fees </p>
              <p className="bg-card-description">
                Lorem ipsum dolor sit amet amet.
              </p>
            </div>
          </div>
        </div>
        <div className="tearms-div mt-3">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            consequatur debitis possimus eos suscipit quisquam quidem numquam
            deleniti officiis laudantium.
          </p>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <div className="row d-flex gap-3 m-0 p-0 flex-wrap justify-content-center mt-5 ">
          <div className="col-5 bg-card">
            <img
              src={Ticket}
              alt=""
              srcset=""
              width={50}
              height={50}
              className=" pb-3"
            />
            <p className="bg-card-title">1 Cradit per Month </p>
            <p className="bg-card-description">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-5 bg-card">
            <img
              src={Ticket}
              alt=""
              srcset=""
              width={50}
              height={50}
              className=" pb-3"
            />
            <p className="bg-card-title">1 Cradit per Month </p>
            <p className="bg-card-description">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-5 bg-card">
            <img
              src={Ticket}
              alt=""
              srcset=""
              width={50}
              height={50}
              className=" pb-3"
            />
            <p className="bg-card-title">1 Cradit per Month </p>
            <p className="bg-card-description">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-5 bg-card">
            <img
              src={Ticket}
              alt=""
              srcset=""
              width={50}
              height={50}
              className=" pb-3"
            />
            <p className="bg-card-title">1 Cradit per Month </p>
            <p className="bg-card-description">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-5 bg-card">
            <img
              src={Ticket}
              alt=""
              srcset=""
              width={50}
              height={50}
              className=" pb-3"
            />
            <p className="bg-card-title">1 Cradit per Month </p>
            <p className="bg-card-description">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-5 bg-card">
            <img
              src={Ticket}
              alt=""
              srcset=""
              width={50}
              height={50}
              className=" pb-3"
            />
            <p className="bg-card-title">1 Cradit per Month </p>
            <p className="bg-card-description">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="tearms-div mt-3 px-3">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              consequatur debitis possimus eos suscipit quisquam quidem numquam
              deleniti officiis laudantium.
            </p>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

export default CardArea;
