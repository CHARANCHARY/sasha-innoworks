import React from "react"
import { Heading } from "../common/Heading"
import { profiles } from "../data/dummydata"

export const OurTeam = () => {
  return (
    <>
      <section className='our-team'>
        <div className='container'>
          <Heading title='MEET OUR TEAM' />
          <div className='content grid3'>
            {profiles.map((item,index) => (
              <div key={index} className='our-box' data-aos='flip-left'>
                <div  data-aos='fade-up'>
                  <img src={item.cover} className='team-img' alt='' data-aos='fade-down' />
                </div>
                <div className='text'>
                  <h3 data-aos='fade-right'>{item.title}</h3>
                  <label data-aos='fade-left'>
                    {item.role}
                  </label>
                  <p data-aos='fade-up-right'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </section>
      <div className="our-clients">
        <Heading title='Our Clients'  data-aos='fade-down-left' />
      
      <p className="para-client"  data-aos='fade-down-right'>
              We are a newly established company and have not
        yet acquired clients. We are leveraging our
        extensive experience to develop innovative
        solutions for industries. We are currently in the
        process of seeking
        funding to support our growth and development. As
        we progress, we look forward to building strong
        relationships with clients in the aerospace,
        automotive, electronics manufacturing industries
        etc.

      </p>
      </div>
    </>
  )
}
