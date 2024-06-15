import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarInsurance from "./components/CarInsurance";
import MechanicalBreakdownInsurance from "./components/MechanicalBreakdownInsurance";
import InsuranceSection from "./components/InsuranceSection";
import Carousel from "./components/Carousel";
import VehicleUpload from "./components/VehicleUpload";

const App = () => (
  <div className="App">
    <Header />
    <Carousel />
    <VehicleUpload />
    <InsuranceSection />
    <Footer />
    {/* Add other components here */}
  </div>
);

export default App;
