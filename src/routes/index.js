import React,{useEffect} from "react";
import Home from '../views/home';
import About from '../views/about';
import Contact from '../views/contact';
import Signin from "../views/signin";
import Signup from "../views/signup";
import Gallery from "../views/gallery";
import Tours from "../views/tours";
import Newtourview from "../views/dashboard/newtour";
import AllTour from "../views/dashboard/alltour";
import Singletour from "../components/singletour";
import {Routes, Route} from 'react-router-dom';
import Dashlayout from "../components/dashboardlayout";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const isUserLogedIn= localStorage.getItem("userLogedIn")
const Index=()=>{
    return(
        <>
       <Routes>
           {/* <Route element={<Home/>} path="/home"> */}
           <Route element={<Home/>} path="/home">

</Route>
           <Route element={<About/>} path="/about">

           </Route>
           
           <Route element={<Contact/>} path="/contact">

           </Route>
           <Route element={<Signin/>} path="/signin">

           </Route>
           <Route element={<Signup/>} path="/signup">

           </Route>
           <Route element={<Gallery/>} path="/gallery">

</Route>
<Route element={<Tours/>} path="/tours">

</Route>
<Route element={<Singletour/>} path="/singletour">

</Route>
</Routes> 
{
    isUserLogedIn ?(
        <Dashlayout>
<Routes>

<Route element={<Newtourview/>} path="/dash/newtour">
</Route>

<Route element={<AllTour/>} path="/dash/alltour">
</Route>
</Routes>

</Dashlayout>
    ) : (
        <></>
    )
}


</>

       
    );
}

export default Index;