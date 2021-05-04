import React, {useState}from "react";
import Homepage from './components/Homepage';
import Aboutme from './components/Aboutme.jsx';
import Project from './components/Project';
import Contact from './components/Contact';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function Portfolio(){

    var [content, setContent]= React.useState(<Homepage choice={homepageButtons}/>);


    function changeContent(e){

        if (e.target.innerHTML == "Home"){
            setContent(<Homepage choice={homepageButtons}/>)
        }
        else if(e.target.innerHTML == "About me / Skills"){
            setContent(<Aboutme/>)
        }
        else if(e.target.innerHTML == "Projects"){
            setContent(<Project/>)
        }
        else {
            setContent(<Contact/>)
        }


    }

    function homepageButtons(choice){

        if (choice == "Projects"){

            setContent(<Project/>)
        }
        if (choice == "Contact"){

            setContent(<Contact/>)
        }

    }

return(
<div id="portfolio-page" className="flex-container">

    <div className="flex-container main-container">
        <div className="flex-container menu-container"> 
            <img src="/images/profile-pic.jpeg" alt="" className="profile-pic"/>
            <em className="profile-name">Davon Wilson</em>
            <em className="job-position">Front End Developer</em>
            <div className="flex-container menu-items-container">
                <em className="menu-items" onClick={changeContent}>Home</em>
                <em className="menu-items" onClick={changeContent}>About me / Skills</em>
                <em className="menu-items" onClick={changeContent}>Projects</em>
                <a href={"https://www.github.com/davonwil3"} target="_blank"><em className="menu-items">Github</em></a>
                <em className="menu-items" onClick={changeContent}>Contact Me</em>
            </div>
        </div>
        <div className="flex-container portfolio-content">
            {content}
        </div>
        <div className="flex-container portfolio-content2">
            <div className="homepage-tablet">
                <div className="flex-container homepage-component">

                    <h1>Hi Im Davon Wilson,</h1>
                    <em>Lets bring your designs to life</em>

                    <Box mt="2%" className="flex-container call-to-action" >
                        <Box mr="6%" >
                            <a href='#projects-table' target="_blank"><Button variant="contained" color="primary" className="projects-button"  > Projects</Button></a>
                        </Box>
                        <Box  >
                            <a href='#contacts-table' target="_blank"><Button variant="outlined" color="primary" className="projects-button"  >Contact</Button></a>
                        </Box>
                    </Box>
                </div>
            </div>
            <div className="aboutme-tablet">
                <Aboutme/>
            </div>
            <div id="projects-table" className="projects-tablet">
                <Project/>
            </div>
            <div id="contacts-table" className="contacts-tablet">
                <Contact/>
            </div>

        </div>

    </div>









</div>

)



}


export default Portfolio;