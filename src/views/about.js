import React from "react";
import Homelayout from "../components/homelayout";
import "../components/aboutlayout.css";
import"./about.css";
const About=()=>{
    return(
        <Homelayout>
    <div className="home-container">
        

        <div className="about">
<div className="text-about">
            <h1>About US</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor orci luctus risus, integer sit tristique nibh neque. Facilisis vel ac lorem iaculis nibh venenatis nisi.</p>
            <p>Location: Kacyiru</p><br/><br/>
            <button className="morebutton1">Learn More</button>
        </div>

        <div >
            <img src={require("../assets/img/Visit-Rwanda.jpg").default} alt=""/>
        </div>
        </div>
     
        
    </div>

        </Homelayout>

    );
}
export default About;