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
            
            title="Us Headlines"
            description = "This Project is called USheadlines. This project is a website that shows the top articles on different topics. You can also search for an article topic. This project utilizes an API called newsapi. Css grid is also featured in this project."
            technologies = {<div><em className="technology">React</em><em className="technology">SASS</em><em className="technology">API's</em><em className="technology">Node js</em><em className="technology">Css Grid</em> <em className="technology">AdobeXD</em></div>}
            src = "/images/usheadlines.png"
            link = "https://www.usheadlines.xyz"
            code ="https://github.com/davonwil3/apiproject"
            />

            <Project
            
            title="Soires"
            description = "Soires is a event planning buisness that I created. This was developed using React and SASS. This website uses a minimalist design."
            technologies = {<div><em className="technology">React</em><em className="technology">SASS</em><em className="technology">Flex-box</em> <em className="technology">AdobeXD</em><em className="technology">Adobe Illustrator</em></div>}
            src = "/images/soires.png"
            link = "https://www.soiresevents.com"
            code ="https://github.com/davonwil3/soires"
            />

        </div>

        </div>




    )



}


export default Projects;