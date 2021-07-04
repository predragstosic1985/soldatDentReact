import React, { useState } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Features from "./Features";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Team from "./Team";
import ContactForm from "./ContactForm";
import $ from "jquery";

const App = (props) => {
  const [state, setState] = useState({
    resumeData: {},
  });

  const getResumeData = () => {
    $.ajax({
      url: "/data.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        setState({ resumeData: data });
      },
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  };

  getResumeData();

  return (
    <div>
      <Navigation />
      <Header data={state.resumeData.Header} />
      <Features data={state.resumeData.Features} />
      <About data={state.resumeData.About} />
      <Services data={state.resumeData.Services} />
      <Gallery />
      <Testimonials data={state.resumeData.Testimonials} />
      <Team data={state.resumeData.Team} />
      <ContactForm data={state.resumeData.Contact} />
    </div>
  );
};

export default App;
