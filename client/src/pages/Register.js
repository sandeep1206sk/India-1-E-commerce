import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import axios from "axios";
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";



export default function Registert() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const [role, setRole] = useState("");
  const  navigate = useNavigate();


const subminHandler = async(e)=>{
  e.preventDefault();
 

  try {
    const resp = await axios.post("http://localhost:8000/api/auth/register",{name,email,phone,address,answer,role,password});
    if (resp.status === 201) {
      // alert(resp.data.message);
      toast.success(resp.data.message);
      navigate('/login')
    
  }else{
    toast.error(resp.data.message);
  }
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error)
  }


}


    

 return (
    <Layout>
    <div>
         <div class="contaner-fluid" id="login-div">
    <div class="row">
      <div class="col-lg-4 col-mg-4 col-sm-2 col-xs-12  "></div>
      <div class="col-lg-4 col-mg-4 col-sm-8 col-xs-12  ">
        <div id="form-div" class=" text-center justify-content-center mt-5 mb-5 pt-5 pb-5 ms-2 me-2">
          <h2 class="text-info fs-1">Register</h2>
          
          <form action="" onSubmit={subminHandler} className="w-75 m-auto mt-5">

          <FloatingLabel controlId="floatingInput"  label="Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Enter your Name"  
              value={name} onChange={(e)=>setName(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Email Address">
                  <Form.Control type="email" placeholder="Enter your Email"
              value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput"  label="Phone"
            className="mb-3 mt-3"
          >
            <Form.Control type="text"  placeholder="Enter your Phone "
              value={phone} onChange={(e)=>setPhone(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Address">
                  <Form.Control type="text" placeholder="Enter your Address"
              value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Enter your friend name" className=" mt-3">
                  <Form.Control type="text" placeholder="Enter your friend name"
              value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Enter your role 1 for admin" className=" mt-3">
                  <Form.Control type="text" placeholder="Enter your friend name"
              value={role} onChange={(e)=>setRole(e.target.value)}/>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-5 mt-3">
                  <Form.Control type="password" placeholder="Password"   value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </FloatingLabel>

            
            <button  type="submit" class="btn btn-warning w-50">Register</button>
          
        
          </form>
          <div className="text-light mt-4">
            <h6>OR</h6>
            <p> Already have an account? <Link to="/login">Login</Link></p>
          </div>
       </div>
      </div>
      <div class="col-lg-4 col-mg-4 col-sm-2 col-xs-12  "></div>
    </div>
    
    
  
   </div>
    </div>
    </Layout>
  )
}
