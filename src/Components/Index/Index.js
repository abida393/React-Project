import React from "react";
import About from "../About/About";
import Work from "../Work/Work";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import Profile from "../Profile/Profile";
import SocialMedia from "../SocialMedia/SocialMedia";

function Index() {
  return (
    <div>
            <Home />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <SocialMedia />
            <Footer />
    </div>
  );
}

export default Index;
