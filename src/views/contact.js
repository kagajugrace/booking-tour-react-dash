import React from "react";
import Contactlayout from "../components/contactlayout";
import "../components/aboutlayout.css";
import"./contact.css";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";


const Contact=()=>{
    return(
        <Contactlayout>
    <div className="home-container">
        

   <div className="contact">

    <div >
        <img src={require("../assets/img/Visit-Rwanda.jpg").default} alt=""/>
    </div>

    <div className="text-contact">
        <h1>Contact Us</h1><br/>

        <div className="contact-form">

            <label for="input">Full Name</label><br/>
            <input /> <br/>
            <label for="input">E-mail</label><br/>
            <input type="email"/> <br/>
            <label for="input">Message</label><br/>
            <textarea> </textarea><br/>
            <input type="submit" value="Contact Us" style={{'borderRadius':'30px',border: "2px solid black", background: "black", color: "white"}}/>

             <a href="https://www.linkedin.com/in/marie-grace-kagaju-aa327a125/" target="_blank" rel="noreferrer">
                 
                  <FontAwesomeIcon icon={faLinkedin} style={{color: "black"}} size="1x"></FontAwesomeIcon>
                  
             </a>&nbsp;&nbsp;&nbsp;
             
             <a href="https://github.com/kagajugrace" target="_blank" rel="noreferrer">
             <FontAwesomeIcon icon={faGithub}  style={{color: "black"}} size="1x" ></FontAwesomeIcon>
                 </a>&nbsp;&nbsp;&nbsp;
             <a href="https://twitter.com/GraceKagaju" target="_blank" rel="noreferrer">
             <FontAwesomeIcon icon={faTwitter} style={{color: "black"}} size="1x"></FontAwesomeIcon>
                  </a>
        </div>
    </div>

    
   </div>
     
        
    </div>

        </Contactlayout>

    );
}

export default Contact;