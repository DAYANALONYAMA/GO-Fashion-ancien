import React from "react";
import Navbar from "../components/Navbar";
import Publication from "../components/Publication";
import Slider from "../components/Slider";

const Accueil = () => {
  return (
    <div>
      <Publication />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Accueil;
