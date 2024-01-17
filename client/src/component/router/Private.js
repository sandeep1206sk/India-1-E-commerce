import React, { useEffect, useState } from 'react'

import { useAuth } from '../../context/Context';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader'


export default function Private() {
  const [ok,setOk] = useState(false);
  const [auth,setAuth] = useAuth();

  useEffect(()=>{
    const authCheck = async()=>{
        const resp = await axios.get("http://localhost:8000/api/auth/user-auth")
        if(resp.data.ok){
            setOk(true)
          }else{
            setOk(false)
          }
    };
    if(auth?.token) authCheck();
  },[auth?.token]);
  return ok ? <Outlet/>:<Loader />;

}

