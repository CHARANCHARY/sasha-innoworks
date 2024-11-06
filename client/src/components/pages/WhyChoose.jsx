import React from "react"
import Slider from "react-slick"
import { testimonials } from "../data/dummydata"
// import { Heading } from "../common/Heading"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import aiimg from "../data/whychoose/ai-image-for-whychoose-us-removebg-preview.png"


export const WhyChoose = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
    <div className="why-choose-main">
      <div className="why-section-1">
        <h1 className="why-choose-head">WHY SHOULD CUSTOMERS CHOOSE US</h1>
          <p className="para-why-choose">Customers should choose SASHA for our unique
                integration of advanced AI, data analytics, and
                intelligent automation that delivers comprehensive
                business transformation solutions across industries.
                We excel at converting complex challenges into
                efficient, intelligent workflows, enabling
                organizations to innovate, optimize processes, and
                foster growth. Our cutting-edge technology and
                customized approach provide superior performance
                and results, empowering businesses to thrive in the
                digital age. With a proven track record of driving
                significant business transformation and a focus on
                future-oriented solutions, SASHA offers a
                competitive advantage through holistic, end-to-end
                AI and automation solutions tailored to specific
                organizational needs.
          </p>
        </div>
        <div className="img-section">
          <img src={aiimg} className="why-img" alt="sasha innoworks" />
        </div>
      </div>






      <section className='testimonials hero'>

        <div className='container-test container'>
          <Slider {...settings}>
            {testimonials.map((val) => (
              <div className='box'>
                <i data-aos='zoom-out-up'>
                  <FormatQuoteIcon />
                </i>
                <p data-aos='zoom-out-down'>{val.text}</p>
                <div className='img' data-aos='zoom-out-right'>
                  <img src={val.image} alt='' />
                </div>
                <h3 data-aos='zoom-out-left'>{val.name}</h3>
                <label data-aos='zoom-out'>{val.post}</label>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}
