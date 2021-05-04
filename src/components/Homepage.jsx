import React, {useState}from "react";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


function Homepage(props){




return(
<div className="flex-container homepage-component">

    <h1>Hi Im Davon Wilson,</h1>
    <em>Lets bring your designs to life</em>

    <Box mt="2%" className="flex-container call-to-action" >
        <Box mr="6%" >
            <Button variant="contained" color="primary" className="projects-button" onClick={() => props.choice("Projects")} > Projects</Button>
        </Box>
        <Box  >
            <Button variant="outlined" color="primary" className="projects-button" onClick={() => props.choice("Contact")} >Contact</Button>
        </Box>
    </Box>
    





</div>
)




}

export default Homepage;