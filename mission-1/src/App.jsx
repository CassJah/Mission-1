import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarInsurance from "./components/CarInsurance";
import MechanicalBreakdownInsurance from "./components/MechanicalBreakdownInsurance";


const App = () => (
  <div className="App">
    <Header />
    <CarInsurance />
    <MechanicalBreakdownInsurance />
    <Footer />
    {/* Add other components here */}
  </div>
);

export default App;
