import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import axios from "axios";
import {toast} from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";





export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const  navigate = useNavigate();
 const[auth,setAuth]= useAuth()
 const location = useLocation();

const subminHandler = async(e)=>{
  e.preventDefault();


  try {
    const resp = await axios.post("http://localhost:8000/api/auth/login",{email,password});
    if (resp.status === 200) {
      // alert(resp.data.message);
      toast.success(resp.data.message);
      setAuth({
        ...auth,
        user:resp.data.user,
        token:resp.data.token
      });
      localStorage.setItem('auth',JSON.stringify(resp.data))
      navigate(location.state ||'/')
    
  }
  else{
    toast.error(resp.data.message)
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
          <h2 class="text-info fs-1">Login</h2>
          
          <form action="" onSubmit={subminHandler} className=" w-75 m-auto mt-5">
              <FloatingLabel controlId="floatingInput"  label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com"  value={email} onChange={(e)=>setEmail(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password"   value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </FloatingLabel>

            <button className="mt-5 btn btn-warning w-50" type="submit" >login</button>
          
        
          </form>
          <div className="text-light mt-4">
            <h6>OR</h6>
            <p> Don't have an account? <Link to="/register">Register</Link></p>
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
