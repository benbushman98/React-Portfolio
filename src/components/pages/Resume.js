import { React, useEffect } from 'react'

import Skills from '../Skills'
import Aos from "aos";
import "aos/dist/aos.css";

const Resume = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });

  },[])

  const style = {
    blueText: {
      color: "#2096F3"
    },
    goldText: {
      color: ""
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        </div>
        <div className="col-10 col-sm-12 col-lg-10">
          <div>
            <div className="d-flex justify-content-center">
              <div className='d-inline-flex'>
                <h1 style={{color: "#2096f3"}}>Resume</h1>
              </div>
            </div>
            <div>
              <div className='d-flex justify-content-center flex-wrap'>
                <Skills />
              </div>
              <div className='color-warning'>
                <a href="https://docs.google.com/document/d/1vEKsxz5gyizjYZfIpFL24hf0qK6ZlLXO/edit?usp=share_link&ouid=103406461307147392263&rtpof=true&sd=true" rel="noreferrer" target="_blank" className='text-decoration-none m-3 text-center' style={style.blueText} download><h4 className='text-warning'>Download</h4></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
        </div>
      </div>
    </div>


  )
}

export default Resume
