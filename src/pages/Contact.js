import { React,useEffect } from 'react'

import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    
      },[])

    const style = {
        blueText: {
            color: '#2096F3'
          },
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-10 col-lg-6 text-center">
                        <h1 style={style.blueText}>Contact Me</h1>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="container my-5">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-10 col-lg-6">
                        <form className="justify-content-center align-items-center text-center">
                            <div className="form-group m-3">
                                <input type="text" className="form-control" id="InputName1" aria-describedby="nameHelp" placeholder="Name" required></input>
                            </div>
                            <div className="form-group m-3">
                                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Email" required></input>
                            </div>
                            <div className="form-group m-3">
                                <input type="text" className="form-control" id="InputSubject1" placeholder="Subject" required></input>
                            </div>
                            <div className="form-group m-3">
                                <input type="text" className="form-control" id="InputMessage1" placeholder="Message" required></input>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        </form>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>

            <div data-aos="fade-down" className="container">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-10 col-lg-6 mb-5">
                        <h5 className='text-white py-2 px-1 text-center'>Please reach out to me with any questions, concerns, suggestions, or interest in collaboration. Feel free to reach out to me via the contact form or visit me on social media.</h5>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact