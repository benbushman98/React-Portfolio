import React from 'react'

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                </div>
                <div className="col-6">
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
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    )
}

export default Contact