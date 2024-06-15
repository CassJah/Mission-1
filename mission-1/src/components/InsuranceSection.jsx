import React from "react";
import CarInsurance from "./CarInsurance";
import MechanicalBreakdownInsurance from "./MechanicalBreakdownInsurance";
import "./InsuranceSection.css";

const InsuranceSection = () => {
  return (
    <div className="insurance-section">
      <CarInsurance />
      <MechanicalBreakdownInsurance />
    </div>
  );
};

export default InsuranceSection;
