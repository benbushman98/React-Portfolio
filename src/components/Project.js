import React from 'react'
import Projects from "./project.json"

const Project = () => {

    return(
        // Help with mapping idea and implementation. https://www.youtube.com/watch?v=aJgAwjP20RY 
    Projects && Projects.map( project => {
        return (
            <div className='imageContainer'>
            {/* // <div  data-aos={project.aos} className="card m-3 text-center" key={project.id} style={{width:"18rem", background:"#d8d8d8",}} > */}
                {/* <div className="card-body"> */}
                    {/* <h5 className="card-title text-decoration-underline">{project.title}</h5> */}
                    <img src={project.src} data-aos={project.aos} className="rounded-4 m-4 imageFlip" alt={project.alt} style={{height: "200px", width: "350px"}}></img>
                    <div className='imageOverlay'>
                        <div className='test'>TEST</div>
                    </div>
                    {/* <p className="card-text py-2">{project.description}</p> */}
                {/* </div> */}

                {/* <div className="card-body p-1"> */}
                    {/* <a href={project.liveLink} rel="noreferrer" target="_blank" className="card-link">Deployed Site</a> */}
                    {/* <a href={project.repoLink} rel="noreferrer" target="_blank" className="card-link">GitHub */}
                        {/* Repo</a> */}
                {/* </div> */}
            {/* // </div> */}
            </div>
        )
    })
    )
}

export default Project