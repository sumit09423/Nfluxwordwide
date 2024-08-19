import React, { useEffect, useState } from "react";
import jsonData from "../assets/Data.json"; // Importing the JSON data

const MyAccordion = () => {
  const [accordionData, setAccordionData] = useState([]);

  // Using the imported jsonData directly
  useEffect(() => {
    setAccordionData(jsonData);
  }, []); // No need to fetch, just set the data

  return (
    <div className="container py-5 px-5 accordion-mobile">
      <h2 className="text-white fw-bold pb-4 mb-4 border-cust">
        Frequently Asked Questions?
      </h2>
      <div
        className="accordion accordion-flush mt-5"
        id="accordionFlushExample"
      >
        {accordionData.map((item, index) => (
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed custom-accordion-button" // Custom class
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${index}`}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`flush-collapse${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAccordion;
