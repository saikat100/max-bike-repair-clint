import React from "react";
import About from "../About/About";
import Client from "../Client/Client";
import ClientFeedback from "../ClientFeedback/ClientFeedback";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Works from "../Works/Works";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Works></Works>
      <ClientFeedback></ClientFeedback>
      <Client></Client>
      <Footer></Footer>
    </div>
  );
};

export default Home;
