import React from "react";
import "./CarInsurance.css";

const CarInsurance = () => {
  return (
    <div className="car-insurance">
      <h3>Car Insurance</h3>
      <p>Cover for accidents, fire, theft, and third-party damage.</p>
      <ul>
        <li>Replacement vehicle cover</li>
        <li>Keys & locks</li>
        <li>Emergency travel, accommodation & repairs</li>
        <li>Towing & storage</li>
      </ul>
      <button>Get a Quote</button>
    </div>
  );
};

export default CarInsurance;
