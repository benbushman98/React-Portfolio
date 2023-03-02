import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";






function Navigation({ currentPage, handlePageChange }) {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const style = {
    colorBack: {
      backgroundColor: "#222222"
    },
    blueText: {
      color: '#2096F3'
    },
    whiteText: {
      color: '#FFFFFF'
    }
  }
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a style={style.whiteText}
          href="#about"
          // data-aos="fade-left"
          onClick={() => handlePageChange('About') }
          className={currentPage === 'About' ? 'nav-link active text-warning' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a style={style.whiteText}
          href="#portfolio"
          // data-aos="fade-up"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active text-warning' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a style={style.whiteText}
          // data-aos="fade-up"
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active text-warning' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a style={style.whiteText}
          // data-aos="fade-right"
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active text-warning' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
