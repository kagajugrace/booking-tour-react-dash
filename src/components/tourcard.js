import React,{useState} from "react";
import picture from "../assets/img/impala.jpg";
import {Drawer} from "antd";
import "antd/dist/antd.css";
import Singletour from "./singletour";

const Tourcard=({data})=>{

    const[drawervisible, setDrawervisible] = useState(false);
    const handleClickDrawerVisible=()=>{
        setDrawervisible(true);
    }

    const closeDrawerVisible=()=>{
        setDrawervisible(false);
    }


    return(
        // <div className="tourcard-container">
        //     <img src={picture} width="50%" alt=""></img>
        //     <div style={{background:"whitesmoke", width:"50%", height:"100%", padding:"20px", textAlign:"center"}}>
        //         <h1>Nyungwe</h1>
        //         <span style={{textAlign:"left", marginTop:"1050"}}>
        //             <br/>
        //             <label>Date scheduled:</label>
        //             <label>Date scheduled:</label>
        //         </span>
        //     </div>
            
        // </div>
<>

        <Drawer title="More Information" placement="left" visible={drawervisible} width={800} onClose={()=>closeDrawerVisible()}>

        <Singletour data={data}></Singletour>
    </Drawer>



        
 <div className="tourC">
        <div className="ourtourC">

            {/* <img src={require('../assets/img/RwandaGorilla.jpg').default} alt=""/> */}
            <img src={data.images[0]} alt=""/>

            {/* <h2>AKagera Tour</h2> */}
            <h1>{data.title}</h1>

            <p>{data.description}

                 <br/><br/>

                 <h3>Due Date: {data.dueDate}</h3>
                 

                 <h3>Seats: {data.seats}</h3>

                 <button className="morebuttonC" onClick={()=>handleClickDrawerVisible()}><a href="#" style={{color:"rgb(78, 34, 9)"}}>Read More...</a></button>

            </p>

           

           

        </div>
        </div> 
        </>
    )
}
export default Tourcard;