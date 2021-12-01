import React,{useState} from "react";
import "./header.css"
import logo from "../assets/img/logo.png"
import {Modal, Form, Input, Button} from "antd";
import {useNavigate} from "react-router-dom";
const Header=()=>{
    const onFinish=(values)=>{
        console.log(values);
    }

    const[modalvisible, setModalvisible] = useState(false);
    const handleClickModalVisible=()=>{
        setModalvisible(true);
    }

    const closeModalVisible=()=>{
        setModalvisible(false);
    }

    const navigate= useNavigate();

    return(


        <>
        <Modal visible={modalvisible}  width="40%" onOk={()=>closeModalVisible()} onCancel={()=>setModalvisible(false)}>
            <h1>SignIn Form</h1>
            <Form onFinish={onFinish}>
                <Form.Item label="Email"
                name="email" rules={[{required:true, type:"email"}]}>
                    <Input type="email"/>
                </Form.Item>
                <Form.Item label="Password"
                name="password" rules={[{required:true, type:"password"}]}>
                    <Input type="password"/>
                </Form.Item>
                <Button htmlType="submit" type="primary" onClick={()=>{localStorage.setItem("userLogedIn",true);
            
            navigate("/dash/newtour");}}> Login</Button>
            </Form>
        </Modal>

        

<div className="header-container">

<div className="logo">
            <img src={logo} alt="" width="100%"/>
        </div>

        <div className="navbar-right">
        <a href="/tours">Tours</a>
        <a href="/signup">Sign Up</a>
            <a href="#" onClick={()=>handleClickModalVisible()}>Sign In</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
            <a href="/about">About Us</a>
            <a href="/home">Home</a>   
        </div>
    </div>
</>
    );
}


export default Header;