import React, {useState}from "react";
import emailjs from 'emailjs-com';


function Contact(){

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_z9wc188', 'template_3rnf93v', e.target, 'user_F8OWBKRrKyHsW6x8miC95')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      }


    return(
        <div className="flex-container Contact-page">
            <div className="flex-container Contact-form">

            <form className="form-contact" onSubmit={sendEmail}
            >
                 <div className="flex-container contact-email">
                    <h3>Send me a email</h3>
                    <div className="flex-container contact-textboxes">
                        <input type="text" className="medium-textbox textbox-margin" placeholder="First Name" name="First_Name"/>
                        <input type="text" className="medium-textbox " placeholder="Last Name" name="Last_Name"/>
                    </div>
                    <div className="flex-container contact-textboxes">
                        <input type="text" className="long-textbox" placeholder="Email" name="email"/>   
                    </div>
                    <div className="flex-container contact-textboxes">
                        <textarea type="text" className="large-textbox "  rows="5" placeholder="Message" name="message"/>   
                    </div>
                    <button className='contact-button1' type="submit" >Contact</button>
                </div>
            </form> 
            </div>


        </div>




    )



}



export default Contact;