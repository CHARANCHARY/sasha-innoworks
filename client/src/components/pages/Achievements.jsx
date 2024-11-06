import React from "react"

// import { Heading } from "../common/Heading"
// import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import aiimg from "../data/whychoose/ai-image-for-whychoose-us-removebg-preview.png"


export const Achievements = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="achievemnets-main">
      <div className="why-section-11">
        <h1 className="why-choose-head">Our Achievement</h1>
          <p className="para-why-choose">ARPOD (Advanced Robotic Pick-and-place
Operations Device) represents a significant
milestone in our journey towards revolutionizing
assembly line automation. This innovative system
successfully integrates deep learning, image
processing, and robotics to achieve real-time
component identification and precise handling.
ARPOD has reached Technology Readiness Level
(TRL) 2-3, transitioning from proof-of-principle to
proof-of-concept, demonstrating its potential to
transform manufacturing processes in aerospace,
automotive, and electronics industries.

          </p>
        </div>
        <div className="img-section">
          <img src={aiimg} className="why-img" alt="sasha innoworks" />
        </div>
      </div>




    </>
  )
}
