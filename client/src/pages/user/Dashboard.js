import React from 'react'
import Layout from '../../component/layout/Layout'
import UserMenu from '../../component/layout/UserMenu'
import { useAuth } from '../../context/Context'

export default function Dashboard() {
  const [auth] = useAuth();

        
  return (
    <Layout >
      <div className='container'>
        <div className="row ">
          <div className="col-md-3">
            <UserMenu/>
          </div>

          <div className="col-md-9  ">
            <h4 className=''>Content</h4>
            <div className="crad ">
              <h5>User name : {auth?.user?.name}</h5>
              <h5>User email : {auth?.user?.email}</h5>
              <h5>User Address: {auth?.user?.address}</h5>
            </div>
            </div>
        </div>
      </div>


      
    </Layout>
  
  )
}
