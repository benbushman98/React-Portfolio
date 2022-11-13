import React from 'react'

const About = () => {
  return (
    <div className=''>
      <div className="container my-2 text-center">
        <div className="row">
          <div className="col">
          </div>
          <div className="col-10 col-lg-6 my-5">
            <img src="images/ben.jpg" width={"300".toString()} height="300" className="rounded mx-auto d-block m-4 border border-5 img-fluid" alt="Benjamin Bushman"></img>
            <h5 className='text-white'>I've always had a deep love of tech. This love has translated into a wide understanding of how the tech world works. From servers and access points, to full stack web developement, to all things hardware, my passion and understanding continues to grow deeper in who I am. <br/> <br/> With this passion, I take on the world as a web developer. Armed with the latest technologies in React, Mongo, Express, and Node, I am set on making a difference in the world.
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