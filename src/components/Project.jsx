import React, {useState}from "react";
import Project from "./projectcomponent"


function Projects(){




    return(

        <div className="flex-container projects-container">
        <div className="flex-container projects-page">
            <Project
            
            title="Blissy"
            description = "Blissy is an ecommerce store I created that sells clothes. This project features a fully operational cart an inventory system. This project relies heavily on Javascript and Redux"
            technologies = {<div><em className="technology">React</em><em className="technology">Redux</em><em className="technology">Node</em><em className="technology">Mongodb</em><em className="technology">AdobeXD</em><em className="technology">Adobe Photoshop</em></div>}
            src = "/images/blissy.png"
            link = "https://www.blissey.biz"
            code = "https://github.com/davonwil3/Blissy-e-commerce"
            />

            <Project
            
            title="Aurora"
            description = "Aurora is a nightclub website I created that is the premier nightclub in New York. This project showcases Css Grid and a nice design created in Adobe XD."
            technologies = {<div><em className="technology">React</em><em className="technology">React Router</em><em className="technology">Css Grid</em><em className="technology">Redux</em><em className="technology">AdobeXD</em></div>}
            src = "/images/aurora.png"
            link = "https://theaurora.club"
            code ="https://github.com/davonwil3/club"
            />

            <Project
            
            title="Us Headlines"
            description = "This Project is called USheadlines. This project is a website that shows the top articles on different topics. You can also search for an article topic. This project utilizes an API called newsapi. Css grid is also featured in this project."
            technologies = {<div><em className="technology">React</em><em className="technology">SASS</em><em className="technology">Css Grid</em> <em className="technology">AdobeXD</em><em className="technology">API's</em></div>}
            src = "/images/usheadlines.png"
            link = "https://www.usheadlines.xyz"
            code ="https://github.com/davonwil3/apiproject"
            />

        </div>

        </div>




    )



}


export default Projects;