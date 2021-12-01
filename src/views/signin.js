import React from "react";
import Aboutlayout from "../components/aboutlayout";
import "../components/aboutlayout.css";
import"./about.css";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
// import {faEnvelope} from "react-icons/fa";
import {faLock} from "@fortawesome/free-solid-svg-icons";
const Signin=()=>{
    return(
        <Aboutlayout>
          <div className="home-container">
        <h1 className="p1">Rwanda Booking Tours</h1>
        <div className="signin-form"><h1 style={{marginLeft: "160px"}} >LOGIN</h1>
        <br/>
        {/* <br/> */}
            <label for="input">Email:</label>
            {/* <FontAwesomeIcon icon={faEnvelope} style={{color: "black"}} size="1x"></FontAwesomeIcon>  */}
             <input type="email" placeholder="            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type your Email"/> <br/>
            <label for="input">Password:</label>
            {/* <FontAwesomeIcon icon={faLock} style={{color: "black"}} size="1x"></FontAwesomeIcon> */}
              <input type="password" placeholder="           &nbsp; &nbsp; &nbsp;&nbsp;Type your password"/> <br/>
            
            
            <input type="submit" value="LOGIN" style={{background: "black", color: "white"}}/><br/><br/>
<label></label><br/><br/><br/><br/>
           <a href="/signup"> <p style={{ float:"right", color:"blue", marginRight:"30px"}}>Sign up</p></a>
           {/* marginRight fro antd css */}
            <p style={{ marginLeft:"170px", color:"blue"}}>Forgot your password &nbsp;or </p> 
             
        
        
        </div>
        
    </div>
        </Aboutlayout>

    );
}
export default Signin;