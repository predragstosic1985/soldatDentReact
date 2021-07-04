import React, { useState, useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import HeaderSoldatDent from "./components/HeaderSoldatDent";
import AboutUs from "./components/AboutUs";
import ServicesSoldatDent from "./components/ServicesSoldatDent";
import GallerySoldatDent from "./components/GallerySoldatDent";
import ContactForm from "./components/ContactForm";
import JsonData from "./data/data.json";
import Loader from "semantic-ui-react/dist/commonjs/elements/Loader";
import Dimmer from "semantic-ui-react/dist/commonjs/modules/Dimmer";
// import FeaturesSoldatDent from "./components/FeaturesSoldatDent";
// import TestimonialUsers from "./components/TestimonialUsers";
// import Team from "./components/Team";
// import LoginForm from "../containers/login/LoginForm";

const WebSite = () => {
  const [state, setState] = useState({
    landingPageData: {},
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000)
  }, [])

  useEffect(() => {
    try {
      getlandingPageData();
    } catch (error) {
      console.log(error);
    } finally {
    }
  }, []);

  const getlandingPageData = () => {
    setState({ landingPageData: JsonData });
  };



  return (
    <>
      <Dimmer.Inner active={isLoading} page>
        <Loader indeterminate >
          Soldat Dent
        </Loader>
      </Dimmer.Inner>

      <NavigationBar />
      <HeaderSoldatDent data={state.landingPageData.Header} />
      {/* <FeaturesSoldatDent data={state.landingPageData.Features} /> */}
      <AboutUs data={state.landingPageData.About} />
      <ServicesSoldatDent data={state.landingPageData.Services} />
      <GallerySoldatDent />
      {/* <TestimonialUsers data={state.landingPageData.Testimonials} /> */}
      {/* <TeamSoldatDent data={state.landingPageData.Team} /> */}
      <ContactForm data={state.landingPageData.Contact} />
      {/* <LoginForm /> */}
    </>
  );
};

export default WebSite;
