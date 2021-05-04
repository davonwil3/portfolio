import React, {useState}from "react";



function ProjectComponent(props){




    return(
        <div className="flex-container project">
            <img src={props.src} alt="" className="project-pic"/>
            <div className="flex-container project-description">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <h5>Technologies</h5>
                <p>{props.technologies}</p>
                <div className="flex-container buttons">
                    <a href={props.link} target="_blank"><button className='project-button1' >Live Site</button></a>
                    <a href={props.code} target="_blank"><button className='project-button'> Code</button></a>
                </div>
            </div>

        </div>






    )



}


export default ProjectComponent;