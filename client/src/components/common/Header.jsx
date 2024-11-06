import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { navlink } from "../data/dummydata"
import logo from "../data/SASHA LOGO FINAL.png"

export const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const navigator = useNavigate();
  const logoHandler = () =>{
    

    navigator("/");
  }

  return (
    <>
      <header className='main'>
        <div className='container flexsb'>
          <div className='logo'  >
            <img src={logo} alt=''  style={{ cursor: 'pointer' }} onClick={logoHandler} className='logo-1' data-aos='zoom-in-right' />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <Link  onClick={() => setResponsive(!responsive)} to={links.url} key={i} data-aos='zoom-in-left'>
                {links.text}
              </Link>
            ))}
          </div>
          <button className='toggle' onClick={() => setResponsive(!responsive)}>
            <MenuIcon style={{ fontSize: '36px' }}  />
          </button>
        </div>
      </header>
    </>
  )
}