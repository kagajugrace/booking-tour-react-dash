import Paragraph from "antd/lib/skeleton/Paragraph";
import { Typography, Divider } from "antd";
import { Row, Col } from 'antd';
import { SRLWrapper } from "simple-react-lightbox";

// const {Title,Paragraph,Text, Link}
import React from "react";

const Singletour=({data})=>{
    return(



<div className="singletour-container">
<Typography>
 <h1 style={{color:"rgb(78, 34, 9)", fontWeight:"bold"}}>  {data.title}</h1> 
 <div style={{marginLeft:"130px"}}>
 <Row>
     <Col span={8}><p style={{fontWeight:"bold", fontSize:"20px"}}>Date Scheduled:</p>{data.dateScheduled}</Col>
      <Col span={8}><p style={{fontWeight:"bold", fontSize:"20px"}}>Available:</p>{data.available}</Col>
    </Row>
<br/>
    <Row>
      <Col span={8}><p style={{fontWeight:"bold", fontSize:"20px"}}>Price:</p> {data.price}</Col>
      <Col span={8}><p style={{fontWeight:"bold", fontSize:"20px"}}>Phone:</p> {data.phone}</Col>
    </Row>
    </div>
    <Divider/>
 
 <img src={data.images[0]} width="100%" alt=""/>
 <Divider/>
 <p>{data.description}</p>
 <Divider/>
 <p>{data.tripDescription}</p>
 {/* <Divider/> */}
{/* <div style={{ float:"left"}}><label style={{fontWeight:"200px", fontSize:"20px"}}>Seats:</label><br/>{data.seats}</div><br/>
<div style={{ float:"left"}}><label style={{fontWeight:"200px", fontSize:"20px"}}>Available:</label><br/>&nbsp;&nbsp;{data.available}</div><br/>
<div style={{ float:"left"}}><label style={{fontWeight:"200px", fontSize:"20px"}}>Date Scheduled:</label><br/>&nbsp;&nbsp;{data.dateScheduled}</div>
<div style={{ float:"left"}}><label style={{fontWeight:"200px", fontSize:"20px"}}>Due Date:</label><br/>&nbsp;&nbsp;{data.dueDate}</div><br/><br/>
<div style={{ float:"left"}}><label style={{fontWeight:"200px", fontSize:"20px"}}>Phone:</label><br/>&nbsp;&nbsp;{data.phone}</div>
<div style={{ float:"left"}}><label style={{fontWeight:"200px", fontSize:"20px"}}>Price:</label><br/>&nbsp;&nbsp;{data.price}</div>
<div style={{ float:"left"}}><label style={{fontWeight:"200px", fontSize:"20px"}}>Posted by:</label><br/>&nbsp;&nbsp;{data?.user.name}<br/> {data?.user.phone}</div> */}


<br/>
    <div style={{ float:"left"}}><label style={{fontWeight:"bold", fontSize:"20px"}}>Posted by:</label><br/>&nbsp;&nbsp;{data?.user.name}<br/> {data?.user.phone}</div>

    <br/><br/><br/>
 </Typography> 

 <Divider/>
 <br/>
 <div className="singletourimg-container">
 <SRLWrapper>
     <br/>
 <h1 style={{color:"rgb(78, 34, 9)", fontWeight:"bold"}}>Gallery</h1>
          <div style={{width:"100%", display:"flex", flexWrap:"wrap", height:"30vh", marginLeft:"50px" }}>
              <div style={{width:"25%",margin:10}}>
                  <img src={data.images[1]} style={{width:"100%", borderRadius:"20px"}} alt=""/>
              </div>

              <div style={{width:"25%",margin:10}}>
              <img src={data.images[2]} style={{width:"100%", borderRadius:"20px"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
              <img src={data.images[3]} style={{width:"100%", borderRadius:"20px"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
              <img src={data.images[4]} style={{width:"100%", borderRadius:"20px"}} alt=""/>
              </div>

              <div style={{width:"25%",margin:10}}>
                  <img src={data.images[5]} style={{width:"100%", borderRadius:"20px"}} alt=""/>
              </div>

              <div style={{width:"25%",margin:10}}>
              <img src={data.images[6]} style={{width:"100%", borderRadius:"20px"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
              <img src={data.images[7]} style={{width:"100%", borderRadius:"20px"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
              <img src={data.images[8]} style={{width:"100%", borderRadius:"20px"}} alt=""/>
              </div>

              <div style={{width:"25%",margin:10}}>
                  <img src={data.images[9]} style={{width:"100%", borderRadius:"20px"}} alt=""/>
              </div>

              <div style={{width:"25%",margin:10}}>
              <img src={data.images[10]} style={{width:"100%", borderRadius:"20px"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
              <img src={data.images[11]} style={{width:"100%", borderRadius:"20px"}} alt=""/>
              </div>
              <div style={{width:"25%",margin:10}}>
              <img src={data.images[12]} style={{width:"100%", borderRadius:"20px"}} alt=""/>
              </div>
              
            
          </div>
          </SRLWrapper>

 </div>
 <br/>
 <button className="button p3">Book Now!</button>
</div>

    )
}
export default Singletour;