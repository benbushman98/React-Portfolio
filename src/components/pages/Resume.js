import React from 'react'
import Skills from '../Skills'

const Resume = () => {
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
                <h1 style={style.blueText}>Resume</h1>
              </div>
            </div>
            <div>
              <div className='d-flex justify-content-center flex-wrap'>
                <Skills />
              </div>
              <div className='color-warning'>
              <a href="https://drive.google.com/file/d/1ibkVEG80J92qcLsPzsud7tZMrz-ey19r/view?usp=share_link" rel="noreferrer" target="_blank" className='text-decoration-none m-3 text-center' style={style.blueText} download><h4 className='text-warning'>Download</h4></a>
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