import React from 'react'
import Projects from "./project.json"
// Potential help for styling cards
// https://bobbyhadz.com/blog/react-inline-style-hover#:~:text=Set%20the%20onMouseEnter%20and%20onMouseLeave,inline%20styles%20on%20the%20element.


const Project = () => {

    return(
        // Help with mapping idea and implementation. https://www.youtube.com/watch?v=aJgAwjP20RY 
    Projects && Projects.map( project => {
        return (
            <div data-aos={project.aos} className="card m-3 text-center hover-zoom hover-shadow" key={project.id} style={{width:"18rem", background:"#d8d8d8"}}>
                <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <img src={project.src} className="card-img-top card hover-shadow" alt={project.alt}></img>
                    <p className="card-text py-2">{project.description}</p>
                </div>

                <div className="card-body p-1">
                    <a href={project.liveLink} rel="noreferrer" target="_blank" className="card-link">Deployed Site</a>
                    <a href={project.repoLink} rel="noreferrer" target="_blank" className="card-link">GitHub
                        Repo</a>
                </div>
            </div>
        )
    })
    )
}

export default Project