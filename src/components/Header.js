import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Navigation from './Navigation';
import Start from './Start';
import React, { useState } from 'react';


const Header = () => {

const [currentPage, setCurrentPage] = useState('Start');

const renderPage = () => {
  if (currentPage === 'Contact') {
    return <Contact />;
  }
  if (currentPage === 'Portfolio') {
    return <Portfolio />;
  }
  if (currentPage === 'Resume') {
    return <Resume />;
  }
  if (currentPage === 'About') {
    return <About />;
  }
  return <Start />;
};

const handlePageChange = (page) => setCurrentPage(page);

return (
  <header>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <p className="navbar-brand text-white "><a  className='text-decoration-none text-white' href='https://benjaminbushman.com'>Benjamin Bushman</a></p>
        <button className="navbar-toggler bg-white rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end text-end" id="navbarNav">
          <div className='justify-content-end' >
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
          </div>
        </div>
      </div>
    </nav>
    <div className=''>
      {renderPage()}
    </div>
  </header>
)
}

export default Header