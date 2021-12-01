import React from "react";
import "../components/homelayout.css";
import"./home.css";
import Tourcard from "../components/tourcard";
import Homelayout from "../components/homelayout";
import akagera2 from "../assets/img/akagaera2.jpg";
import akagera from "../assets/img/Akagera.jpg";
import akagera3 from "../assets/img/Akagera3.jpg";
import impala from "../assets/img/impala.jpg";
import allToursData from "../assets/constants/tours.json";




const Toursview=()=>{

    

    return (
        <>

       
        <Homelayout>
            
        {/* <h1>lkljlkl</h1> */}



    <div className="tours-container" >
        {
            allToursData.map((data)=>(<Tourcard data={data}/>))
        }
        
    
    
    </div>

   

        </Homelayout>
        </>
    )
}
export default Toursview