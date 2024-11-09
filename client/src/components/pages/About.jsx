import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"
import proposal from "../data/Business Proposal.pdf"

export const About = () => {

  const handleDownload = () => {
    // The URL of the file you want the user to download
    const fileUrl = proposal; // Update with your actual file path
    
    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'proposal.pdf'; // The name of the downloaded file
    a.style.display = 'none';
    
    // Append the anchor to the body and trigger the download
    document.body.appendChild(a);
    a.click();
    
    // Remove the anchor element after the download
    document.body.removeChild(a);
  };

  // const handleMailClick = () => {
  //   // Replace 'your-email@example.com' with your actual email address
  //   const mailto = 'mailto:sashainnoworks@gmail.com';
    
  //   // This will open the user's default email client with your email address
  //   window.location.href = mailto;
  // };



  return (
      <section className='about '>
        <div className='about-container'>
          {about.map((val,index) => (
            <div key={index} className="flex-2" >
              <div  className='left' data-aos='fade-down-left'>
                <img className="about-image" src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Us' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                {/* <button onClick={handleMailClick}>Mail Us</button> */}
                <button className='primaryBtn'  onClick={handleDownload}>More About Us</button>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}
