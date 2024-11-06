import React from "react";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation
  const handleContactClick = () => {
    navigate("/contact"); // Navigate to /contact path
  };

  return (
    <section className='hero'>
      {home.map((val, i) => (
        <div className='heroContent' key={i}> {/* Add key prop for list items */}
          <h3 className='fontSize' data-aos='fade-right'>
            {val.text}
          </h3>
          <h1>
            <Typewriter
              options={{
                strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p data-aos='fade-left'>{val.desc}</p>
          <button className='primaryBtn' data-aos='fade-up-right' onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      ))}
    </section>
  );
};
