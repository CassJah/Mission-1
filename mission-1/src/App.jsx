import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import VehicleUpload from "./components/VehicleUpload";
import InsuranceSection from "./components/InsuranceSection";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <VehicleUpload />
      <InsuranceSection />
      <Footer />
    </div>
  );
};

export default App;
