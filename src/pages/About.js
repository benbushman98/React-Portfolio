import { React,useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });

  },[])

  return (
    <div className=''>
      <div className="container text-center">
        <div className="row">
          <div className="col">
          </div>
          <div className="col-10 col-lg-6">
          <div className="d-flex justify-content-center">
                        <div className='d-inline-flex'>
                            <h1 style={{ color: "#2096f3" }}>About Me</h1>
                        </div>
                    </div>
            <img src="images/ben.jpg" data-aos="fade-left" width={"300".toString()} height="300" className="rounded-5 mx-auto d-block m-4 border border-5 img-fluid" alt="Benjamin Bushman"></img>
            <h5 className='text-white' data-aos="fade-right">I've always had a deep love of tech. This love has translated into a wide understanding of how the tech world works. From servers and access points, to full stack web developement, to all things hardware, my passion and understanding continues to grow deeper in who I am. <br/> <br/> With this passion, I take on the world as a web developer. Armed with the latest technologies in React, Mongo, Express, and Node, I am set on making a difference in the world.
            </h5>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    </div>

  )
}

export default About