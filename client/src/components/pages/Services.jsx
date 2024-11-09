import React from "react"
import { services } from "../data/dummydata";

export const Services = () => {
  return (
    <>
      <section className='ser'>
        <div className='container'>
          <h1 className="ser-head">Services</h1>
          <p className='ser-para'>We offer advanced AI and automation solutions for industries, including</p>
          <div className='grid3'>
            {services.map((item,index) => (
              <div key={index} className="ser-box"  data-aos='flip-left'>
                <i >{item.icon}</i>
                <h3 >{item.title}</h3>
                <p  >{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
