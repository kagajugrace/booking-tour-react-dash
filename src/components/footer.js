import React from "react";
import"./footer.css";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
const Footer=()=>{
    return(
        <div className="main-footer">
           <div className="container">
           <div className="row">
        <div className="col">
            <h4 style={{color:"white", fontSize:"20px"}}>About Us</h4> 
             {/* style for antd css  */}
            <ul className="list-unstyled">
                <li>Tourism</li>
                <li>Booking</li>
                <li>Customer care</li>
            </ul>
        </div>

        <div className="col1">
            <h4 style={{color:"white", fontSize:"20px"}}>Contact Us</h4>
            <ul className="list-unstyled">
                <li><a href="https://gmail.com/" target="_blank" rel="noreferrer">
         <FontAwesomeIcon icon={faEnvelope} style={{color: "black"}} size="1x"></FontAwesomeIcon>
        </a>&nbsp;&nbsp;&nbsp;Email</li>
                {/* <li>Booking</li>
                <li>Customer care</li> */}
            </ul>
        </div>

        <div className="col2">
            <h4 style={{color:"white", fontSize:"20px"}}>Social Media</h4>
            <ul className="list-unstyled">
            <li> <a href="https://twitter.com/GraceKagaju" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} style={{color: "black"}} ></FontAwesomeIcon>
                 </a>&nbsp;&nbsp;&nbsp;Twitter</li>
                <li> <a href="https://www.linkedin.com/in/marie-grace-kagaju-aa327a125/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} style={{color: "black"}} size="1x"></FontAwesomeIcon>
                          </a>&nbsp;&nbsp;&nbsp;linkedin</li>
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} style={{color: "black"}} ></FontAwesomeIcon>
                 </a>&nbsp;&nbsp;&nbsp;Facebook</li>
            </ul>
        </div>
           </div>
           <hr/>

           <div className="row">
               <p className="col-sm">&copy; {new Date().getFullYear} Booking Tour | All right reserved | Terms of service</p>
           </div>
               </div>  
        </div>

        // <div className="footer-container">
            
        //     <a href="https://www.linkedin.com/in/marie-grace-kagaju-aa327a125/" target="_blank" rel="noreferrer">
                 
        //           <FontAwesomeIcon icon={faLinkedin} style={{color: "black", background:"rgb(109, 126, 228)", borderRadius:"20px", marginTop:"40px"}} size="3x"></FontAwesomeIcon>
                  
        //      </a>&nbsp;&nbsp;&nbsp;
             
        //      <a href="https://github.com/kagajugrace" target="_blank" rel="noreferrer">
        //      <FontAwesomeIcon icon={faGithub}  style={{color: "black", background:"rgb(109, 126, 228)", borderRadius:"20px",marginTop:"40px"}} size="3x" ></FontAwesomeIcon>
        //          </a>&nbsp;&nbsp;&nbsp;
        //      <a href="https://twitter.com/GraceKagaju" target="_blank" rel="noreferrer">
        //      <FontAwesomeIcon icon={faTwitter} style={{color: "black", background:"rgb(109, 126, 228)", borderRadius:"20px", marginTop:"40px"}} size="3x"></FontAwesomeIcon>
        //           </a>
        //           <a href="https://gmail.com/" target="_blank" rel="noreferrer">
        //      <FontAwesomeIcon icon={faEnvelope} style={{color: "black", background:"rgb(109, 126, 228)", borderRadius:"20px", marginTop:"40px"}} size="3x"></FontAwesomeIcon>
        //           </a>
        //           <div className="footerp">
        //           <p>HOME</p>&nbsp; &nbsp; &nbsp;&nbsp;
        //           <p>ABOUT</p>&nbsp; &nbsp; &nbsp;&nbsp;
        //           <p>CONTACT</p>&nbsp; &nbsp; &nbsp;&nbsp;
        //           <p>SIGN IN</p>
        //           </div>
        //           <div className="footer-container2">
        //               <p>Discover the best things to do, wherever you go. Book tickets for tours, museums, attractions, and more in top destinations around the world</p>
        //           </div>
        // </div>

    );
}
export default Footer;