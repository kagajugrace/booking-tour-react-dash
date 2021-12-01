import React from "react";
import Aboutlayout from "../components/aboutlayout";
import "../components/aboutlayout.css";
import"./about.css";

const Signup=()=>{
    return(
        <Aboutlayout>
          <div className="home-container">
        
        <h1 className="p1">Rwanda Booking Tours</h1>
        <div className="signup-form"><h1 style={{marginLeft: "140px"}} >Create Account</h1>
        {/* <br/><br/> */}   
            <label for="input">Names:</label>
            <input /> <br/>
            <label for="input">Email:</label>
            <input type="email"/> <br/>
            <label for="input">Phone:</label>
            <input/> <br/>
            <label for="input">Birth date:</label>
            <input type="date"/> <br/>
            <label for="input">Password:</label>
            <input type="password"/> <br/>
           <a href="./signin"> <input type="submit" value="Submit" style={{background: "black", color: "white"}}/></a>
        
        
        </div>
        
    </div>
        </Aboutlayout>

    );
}
export default Signup;