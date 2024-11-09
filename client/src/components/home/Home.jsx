import React from "react"
import { About } from "../pages/About"
import { OurTeam } from "../pages/OurTeam"
import { Contact } from "../pages/Contact"
// import { Counter } from "../pages/Counter"
import { Achievements } from "../pages/Achievements"
import { Services } from "../pages/Services"
import { WhyChoose } from "../pages/WhyChoose"
import { Hero } from "./Hero"

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <OurTeam />
      <Achievements />
      <WhyChoose />
      
      <Contact />
     
      {/* <Portfolio />
      
       */}
    </>
  )
}