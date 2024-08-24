import React, { useState, useEffect } from "react";
import "../LandingPage.css";

import { Navigation } from "./landingPage/navigation";
import { Header } from "./landingPage/header";
import { Features } from "./landingPage/features";
import { About } from "./landingPage/about";
import { Services } from "./landingPage/services";
import { Gallery } from "./landingPage/gallery";
import { Testimonials } from "./landingPage/testimonials";
import { Team } from "./landingPage/Team";
import { Contact } from "./landingPage/contact";
import JsonData from "../data/data.json";


const LandingPage = ({ setView }) => {
  const [landingPageData, setLandingPageData] = useState({});
useEffect(() => {
  setLandingPageData(JsonData);
}, []);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
     </div>
  );
};

export default LandingPage;
