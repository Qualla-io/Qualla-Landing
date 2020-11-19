import React from "react";
import Header from "../containers/Header";
import HowItWorks from "../containers/HowItWorks";
import Details from "../containers/Details";
import Footer from "../containers/Footer";


export default function Landing() {
  return (
    <div>
      <Header />
      <HowItWorks />
      <Details />
      <Footer />
    </div>
  );
}
