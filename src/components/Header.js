import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
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
    <header class>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#about">BB</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <div>
              <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
          </div>
        </div>
      </nav>
      <div>
        {renderPage()}
      </div>
    </header>
  )
}

export default Header