import React from 'react'
import Layout from '../../component/layout/Layout'
import AdminMenu from '../../component/layout/AdminMenu'
import { useAuth } from '../../context/Context'

export default function AdminDashboard() {

    const [auth] = useAuth()
  return (
    <Layout>
      <div className='container'>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu/>
          </div>

          <div className="col-md-9">
            <h4>Content</h4>
            <div className="crad">
              <h5>Admin name : {auth?.user?.name}</h5>
              <h5>Admin email : {auth?.user?.email}</h5>
              <h5>Admin phone : {auth?.user?.phone}</h5>
            </div>
            </div>
        </div>
      </div>


      
    </Layout>
  )
}
