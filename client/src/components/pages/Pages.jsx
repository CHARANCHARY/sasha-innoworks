import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
import { About } from "./About";
import { OurTeam } from "./OurTeam";
import { Contact } from "./Contact";
import { Achievements } from "./Achievements";
import { Services } from "./Services";
import { WhyChoose } from "./WhyChoose";

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current pathname

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever pathname changes
  }, [pathname]); // Dependency array includes pathname

  return null; // No visible component
};

export const Pages = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop /> {/* ScrollToTop component here */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/why-choose-us' element={<WhyChoose />} />
        <Route path='/our-team' element={<OurTeam />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};
