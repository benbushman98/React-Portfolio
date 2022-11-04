import React from 'react'

const Project = () => {
    const style = {
        width: "18rem"
    }
    return (
        <div className="card m-3 text-center" style={style}>
            <div className="card-body">
                <h5 className="card-title">GitSurveys</h5>
                <img src="GitSurveys.png" className="card-img-top" alt="GitSurveys Homepage"></img>
                    <p className="card-text py-2">GitSurveys is an application created with the purpose of facilitating the
                        process
                        for objective data collections. This application is for people longing to have a better
                        understanding of how others think and their preferences.</p>
            </div>

            <div className="card-body p-1">
                <a href="https://www.gitsurveys.com/" rel="noreferrer" target="_blank" className="card-link">Deployed Site</a>
                <a href="https://github.com/benbushman98/gitsurveys" rel="noreferrer" target="_blank" className="card-link">GitHub
                    Repo</a>
            </div>
        </div>
    )
}

export default Project