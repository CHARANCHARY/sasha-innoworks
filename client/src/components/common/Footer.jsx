import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item,index) => (
          < >
            <a key={index} href="https://www.linkedin.com/company/sasha-innoworks-pvt-ltd/" target="_blank" rel="noopener noreferrer" data-aos='zoom-in'>{item.icon}</a>
          </>
        ))}
        <p>All Right Reserved SaSha</p>
      </footer>
    </>
  )
}

export default Footer