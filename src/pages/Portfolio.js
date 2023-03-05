import Project from '../components/Project';
import { React, useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });

    }, [])

    return (

        <div className="container">
            <div className="row">
                <div className="col">
                </div>
                <div className="col-10 col-sm-12 col-lg-12">
                    <div className="d-flex justify-content-center">
                        <div className='d-inline-flex'>
                            <h1 style={{ color: "#2096f3" }}>Portfolio</h1>
                        </div>
                    </div>
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

