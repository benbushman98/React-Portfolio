import React from 'react'

const Contact = () => {
    const style = {
        social: {
            padding: "20px",
            fontSize: "30px",
            width: "50px",
            textAlign: "center",
            textDecoration: "none",
        },
        link: {
            textDecoration: "none",
            color: "black"
        },
    }
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-10 col-lg-6 text-center bg-light">
                        <h1>Contact Me</h1>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>

            <div className="container my-2">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-10 col-lg-6 bg-light">
                        <form className="justify-content-center align-items-center text-center">
                            <div className="form-group m-3">
                                <input type="text" className="form-control" id="InputName1" aria-describedby="nameHelp" placeholder="Name"></input>
                            </div>
                            <div className="form-group m-3">
                                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                            </div>
                            <div className="form-group m-3">
                                <input type="text" className="form-control" id="InputSubject1" placeholder="Subject"></input>
                            </div>
                            <div className="form-group m-3">
                                <input type="text" className="form-control" id="InputMessage1" placeholder="Message"></input>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        </form>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>

            <div className="container my-2 py-5">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-10 col-lg-6 bg-light">
                        <p className='bg-light py-2 px-1 text-center'>Please reach out to me with any questions, concerns, suggestions, or interest in collaboration. Feel free to reach out to me via the contact form or visit me on social media.</p>
                        <div className='d-flex justify-content-center'>
                            <div className='mx-2' style={style.social}><a style={style.link} href="https://github.com/benbushman98" target="_blank" rel="noopener noreferrer" alt="GitHub Profile"><i aria-hidden="true" className="fa fa-1x fa-github"></i><title>GitHub</title></a></div>
                            <div className='mx-2' style={style.social}><a style={style.link} href="https://www.linkedin.com/in/benjamin-bushman-92b17a217/" target="_blank" rel="noopener noreferrer" alt="LinkedIn Profile"><i aria-hidden="true" className="fa fa-1x fa-linkedin"></i><title>LinkedIn</title></a></div>
                            <div className='mx-2' style={style.social}><a style={style.link} href="https://wakatime.com/@d5bf7d44-40df-44fa-8584-1d216fc91153" target="_blank" rel="noopener noreferrer" alt="WakaTime Profile"><svg role="img" width="25" height="30" viewBox="0 2 24 24" xmlns="http://www.w3.org/2000/svg"><title>WakaTime</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.824a9.176 9.176 0 1 1 0 18.352 9.176 9.176 0 0 1 0-18.352zm5.097 5.058c-.327 0-.61.19-.764.45-1.025 1.463-2.21 3.162-3.288 4.706l-.387-.636a.897.897 0 0 0-.759-.439.901.901 0 0 0-.788.492l-.357.581-1.992-2.943a.897.897 0 0 0-.761-.446c-.514 0-.903.452-.903.96a1 1 0 0 0 .207.61l2.719 3.96c.152.272.44.47.776.47a.91.91 0 0 0 .787-.483c.046-.071.23-.368.314-.504l.324.52c-.035-.047.076.113.087.13.024.031.054.059.078.085.019.019.04.036.058.052.036.033.08.056.115.08.025.016.052.028.076.04.029.015.06.024.088.035.058.025.122.027.18.04.031.004.064.003.092.005.29 0 .546-.149.707-.36 1.4-2 2.842-4.055 4.099-5.849A.995.995 0 0 0 18 8.842c0-.508-.389-.96-.903-.96" /></svg></a></div>
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact