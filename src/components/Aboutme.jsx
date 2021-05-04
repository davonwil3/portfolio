import React, {useState}from "react";



function Aboutme(){




    return(
        <div className="flex-container aboutme-component">

            <div className="flex-container about-description">
                <h3>About Me</h3>
                <p>Hi my name is Davon Wilson, im a front end developer with a solid understanding of ui/ux fundamentals. 
                    I love to build projects from start to finish. I can make hi fidelity mockups and wireframes and bring it to life on the web. 
                    Im also decent with modern backend technologies. Recently I graduated from Nassau college with an associates degree and also graduated from an onmline coding bootcamp.
                    My hobbies are video games , web design, and watching sports. Im a huge Ravens fan and we will definetly be winning the superbowl this year!!. Please check out my projects and Contact me if youre interested =) hope to hear from you soon.
                </p>

            </div>

            <div className="flex-container skills">
                <h3>Skills</h3>
                <div className="flex-container skills-description">

                    <div className="flex-container ui-ux">
                        <h5>Ui/Ux</h5>
                        <div className="flex-container left-align">
                            <div className="flex-container icons-skills">
                                <img src="/images/Adobephotoshop.png" alt="" className="icon"/>
                                <em>Adobe Photoshop</em>
                            </div>
                            <div className="flex-container icons-skills">
                                <img src="/images/Adobexd.png" alt="" className="icon"/>
                                <em>Adobe Xd</em>
                            </div>
                            <div className="flex-container icons-skills">
                                <img src="/images/Adobeillustrator.png" alt="" className="icon"/>
                                <em>Adobe Illustrator</em>
                            </div>
                        </div>
                    </div>

                    <div className="flex-container Front-End-Development">
                        <h5>Front End</h5>
                        <div className="flex-container left-align">
                            <div className="flex-container icons-skills">
                                <img src="/images/html.png" alt="" className="icon"/>
                                <em> HTML </em>
                            </div>
                            <div className="flex-container icons-skills">
                                <img src="/images/css.png" alt="" className="icon"/>
                                <em>CSS </em>
                            </div>
                            <div className="flex-container icons-skills">
                                <img src="/images/javascript.png" alt="" className="icon"/>
                                <em>Javascript</em>
                            </div>
                            <div className="flex-container icons-skills">
                                <img src="/images/react.png" alt="" className="icon"/>
                                <em>React</em>
                            </div>
                            <div className="flex-container icons-skills">
                                <img src="/images/redux.png" alt="" className="icon"/>
                                <em>Redux</em>
                            </div>
                            <div className="flex-container icons-skills">
                                <img src="/images/sass.png" alt="" className="icon"/>
                                <em>Sass</em>
                            </div>
                        </div>
                    </div>

                    <div className="flex-container Back-End-Development">
                        <h5>Back End</h5>
                        <div className="flex-container left-align">
                            <div className="flex-container icons-skills">
                                <img src="/images/node.png" alt="" className="icon"/>
                                <em> Node js </em>
                            </div>
                            <div className="flex-container icons-skills">
                                <img src="/images/mongodb.png" alt="" className="icon"/>
                                <em>Mongo db </em>
                            </div>
                            <div className="flex-container icons-skills">
                                <img src="/images/express.png" alt="" className="icon"/>
                                <em>Express</em>
                            </div>
                            <div className="flex-container icons-skills">
                                <img src="/images/api.png" alt="" className="icon"/>
                                <em>Apis</em>
                            </div>
                         
                        </div>
                    </div>



                </div>


            </div>



        </div>






    )



}


export default Aboutme;


