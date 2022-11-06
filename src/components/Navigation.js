import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navigation({ currentPage, handlePageChange }) {
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
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active text-info' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a style={style.whiteText}
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active text-info' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a style={style.whiteText}
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active text-info' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a style={style.whiteText}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active text-info' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
