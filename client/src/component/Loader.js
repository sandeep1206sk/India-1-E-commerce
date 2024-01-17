import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Loader({path="login"}) {
    const [count,setCount]= useState(3);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
const interval = setInterval(()=>{
    setCount((prevValue)=> --prevValue);
},1000)
    count===0 && navigate(`/${path}`,{
        state:location.pathname,
    });
    return ()=>clearInterval(interval);
    
    },[count, navigate,location,path])
  return (
    <div>
        <h1> redirecting to in {count} second</h1>
          <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
};
