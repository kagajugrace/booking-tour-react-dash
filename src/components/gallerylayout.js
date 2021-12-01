import React from "react";
import "./homelayout.css";
import Header from "./header";
import Footer from "./footer";
const Home=({children})=>{
    return(
        <div className="home-container">
       {/* <h1>This my home</h1> */}
       <Header/>
       {/* <div style={{height:"80%",background:"blue"}}> */}
       <div style={{height:"170vh"}}>
           {children}
           
           </div>
       <Footer/>
        </div>
    )
}
export default Home;