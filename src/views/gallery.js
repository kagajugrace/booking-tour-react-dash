import React from "react";
import Aboutlayout from "../components/gallerylayout";
import "../components/gallerylayout.css";
import"./about.css";
import { SRLWrapper } from "simple-react-lightbox";

const Gallery=()=>{
    return(
        <Aboutlayout>
            <SRLWrapper>
                <div className="gallery-view">
                <h1>Gallery</h1>
          <div style={{width:"100%", display:"flex", flexWrap:"wrap", height:"100vh", marginLeft:"100px" }}>
              <div style={{width:"25%",margin:10}}>
                  <img src={require('../assets/img/pexels22.jpg').default} style={{width:"100%"}} alt=""/>
              </div>

              <div style={{width:"25%",margin:10}}>
                  <img src={require('../assets/img/pexels11.jpg').default} style={{width:"100%"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
                  <img src={require('../assets/img/pexels12.jpg').default} style={{width:"100%"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
                  <img src={require('../assets/img/pexels13.jpg').default} style={{width:"100%"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
                  <img src={require('../assets/img/pexels14.jpg').default} style={{width:"100%"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
                  <img src={require('../assets/img/pexels15.jpg').default} style={{width:"100%"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
                  <img src={require('../assets/img/pexels16.jpg').default} style={{width:"100%"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
                  <img src={require('../assets/img/pexels17.jpg').default} style={{width:"100%"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
                  <img src={require('../assets/img/pexels18.jpg').default} style={{width:"100%"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
                  <img src={require('../assets/img/pexels19.jpg').default} style={{width:"100%"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
                  <img src={require('../assets/img/pexels20.jpg').default} style={{width:"100%"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
                  <img src={require('../assets/img/pexels23.jpg').default} style={{width:"100%"}} alt=""/>
              </div>
          </div>
          </div>
          </SRLWrapper>
        </Aboutlayout>

    );
}
export default Gallery;