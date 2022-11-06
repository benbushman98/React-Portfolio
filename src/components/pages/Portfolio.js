import Project from '../Project';
import React from 'react'

const Portfolio = () => {
    return (

        <div className="container">
            <div className="row">
                <div className="col">
                </div>
                <div className="col-10 col-sm-12 col-lg-10">
                    <div className='d-flex justify-content-center flex-wrap'>
                        <Project />
                    </div>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    )
}

export default Portfolio

