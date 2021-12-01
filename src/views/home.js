import React from "react";
import "../components/homelayout.css";
import"./home.css";
import undraw from "../assets/img/undraw.png";
import akagera2 from "../assets/img/akagaera2.jpg";
import akagera from "../assets/img/Akagera.jpg";
import akagera3 from "../assets/img/Akagera3.jpg";
import impala from "../assets/img/impala.jpg"
// import Header from "../components/header";
// import Footer from "../components/footer";
import Homelayout from "../components/homelayout";

const Home=()=>{
    return(
    //     <div className="home-container">
    //    {/* <h1>This my home</h1> */}
    //    <Header/>
    //    <div style={{height:"70%"}}></div>
    //    <Footer/>
    //     </div>
    <Homelayout>
        {/* <h1>klksjcksj</h1> */}

        <div className="home-container">
        
        <h1 className="p1">Rwanda Booking Tours</h1>
        {/* <br><br><br><br><br><br> */}
    <div className="box">
       <p className="p2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor orci luctus risus, integer sit tristique nibh neque. Facilisis vel ac lorem iaculis nibh venenatis nisi.</p>
      

       <div>
        {/* <br><br> */}
        <button className="button p3">Book Now!</button></div>
    
        </div>
    </div>

    <div className="tour-selection-container">
    
   
    <div style={{width:"100%", height:"15px", padding: "10px", display:"flex"}}>
    <div style={{width: "20%", height:"5px", background:" rgb(95, 6, 6)", marginLeft: "20%"}}></div>
    <div style={{width: "10%", height:"5px", background: "rgb(95, 6, 6)", marginLeft: "5%"}}></div>
    <div style={{width: "20%", height:"5px", background: "rgb(95, 6, 6)", marginLeft: "5%"}}></div>
</div>
<div className="book-sort-div">
<div className="book-sort">
    <h1>Book Your Tour Now!</h1>
    <br/>

        <label for="cars">Tour Category:</label><br/><br/>
       
        <select name="cars" id="cars">
          <option value="park" style={{width: "200px"}}>Park</option>
          <option value="lac">Lacs</option>
          <option value="forest">Forest</option>
        </select>
    
        <br/><br/>

        <label for="cars">Tour Location:</label><br/><br/>
        
        <select name="cars" id="cars">
          <option value="karongi" >Karongi</option>
          <option value="kayonza">Kayonza</option>
          <option value="musanze">Musanze</option>
          <option value="nyanza" >Nyanza</option>
          <option value="rubavu">Rubavu</option>
          <option value="rwamagana">Rwamagana</option>
        </select>
    
        <br/>
        <a href="/tours" ><button className="button" style={{width:"50%", color:"rgb(95, 6, 6);"}}>Search Tour </button></a>
    </div> 
    
    <img src={undraw} alt="" width="45%"/>
      
</div> 
<br/><br/>


 {/* <!-- Gallery and tours --> */}

 <div className="galleryTour">

    <div className="galleryImage">

        <h1>Gallery</h1>

    <div className="responsive">



        <div className="gallery">

            <img src={akagera2} alt="" />

         </div>

    </div>

    <div className="responsive">

        <div className="gallery">

            <img src={akagera} alt=""/> 

         </div>

    </div>

    <div className="responsive">

        <div className="gallery">

            <img src={akagera3} alt=""/>

         </div>

    </div>

    <div className="responsive">

        <div className="gallery">

            <img src={impala} alt=""/>

         </div>

    </div>
    <br/><br/><br/><br/> 

    <a href="/gallery"><button className="morebutton" style={{float: "right", marginRight: "65px"}}>View More...</button></a>
     

   </div>

     {/* <!-- tour a side --> */}



    {/* <div className="tour">

        <h1>Our Tour</h1>

        <div className="list">

            <div className="listitem">Volcanoes</div>

            <div  className="listitem">Lacs</div>

            <div  className="listitem">Parks</div>

        </div>

        <div className="ourtour">

            <img src={require('../assets/img/RwandaGorilla.jpg').default} alt=""/>

            <h2>AKagera Tour</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quia repellat consectetur officia maxime ipsa minus molestias, tenetur recusandae tempore nihil eveniet unde accusamus hic,

                 eum expedita nam eaque cupiditate!

                 <br/>

                 <h3>Date:12 December 2021</h3>

                 <h3>Seats:23/45</h3>

                 <button className="morebutton">Read More...</button>

            </p>

           

           

        </div>

        <div className="ourtour">

            <img src={require("../assets/img/RwandaGorilla.jpg").default} alt=""/>

            <h2>AKagera Tour</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quia repellat consectetur officia maxime ipsa minus molestias, tenetur recusandae tempore nihil eveniet unde accusamus hic,

                 eum expedita nam eaque cupiditate!

                

                 <h3>Date:12 December 2021</h3>

                 <h3>Seats:23/45</h3>

                 <button className="morebutton">Read More...</button>

            </p>

           

        </div>

        <div className="ourtour">

            <img src={require("../assets/img/Visit-Rwanda.jpg").default} alt=""/>

            <h2>AKagera Tour</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quia repellat consectetur officia maxime ipsa minus molestias, tenetur recusandae tempore nihil eveniet unde accusamus hic,

                 eum expedita nam eaque cupiditate!

                

                 <h3>Date:12 December 2021</h3>

                 <h3>Seats:23/45</h3>

                 <button className="morebutton">Read More...</button>

            </p>

        </div>

        <div className="ourtour">

            <img src={require("../assets/img/RwandaGorilla.jpg").default} alt=""/>

            <h2>AKagera Tour</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quia repellat consectetur officia maxime ipsa minus molestias, tenetur recusandae tempore nihil eveniet unde accusamus hic,

                 eum expedita nam eaque cupiditate!

                 

                 <h3>Date:12 December 2021</h3>

                 <h3>Seats:23/45</h3>

                 <button className="morebutton">Read More...</button>

            </p>

        </div>

    </div> */}

</div>




</div>
    </Homelayout>
    )
}
export default Home;