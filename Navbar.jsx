import React, { useState } from "react";
import "../styles/Navbar.css";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo2.png'
import {motion} from 'framer-motion'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <motion.nav className="navbar" initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>       
          <img src={Logo} style={{maxWidth: '100%',maxHeight: '100%',display: 'block'}} alt="" onClick = {closeMobileMenu} />
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item" >
            <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/gallery" className="nav-links" onClick={closeMobileMenu}>
              Gallery{" "}
            </NavLink>
          </li>
          <motion.li className="nav-item" initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 0.5 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }}>
            <NavLink to="/opportunities" className="btn nav-links" onClick={closeMobileMenu}>
              Opportunities
            </NavLink>
          </motion.li>
          <li className="nav-item">
            <NavLink to="/faq" className="nav-links" onClick={closeMobileMenu}>
              Faq's
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
}

export default Navbar;

