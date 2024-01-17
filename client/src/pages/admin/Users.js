import React from 'react'
import Layout from '../../component/layout/Layout'
import AdminMenu from '../../component/layout/AdminMenu'

export default function Users() {
  return (
    <Layout title={'Dasboard - All users'}>
      <div className='container' active>
        <div className="row">
            <div className="col-md-3">
                <AdminMenu/>
            </div>
            <div className="col-md-3">
               <h1>All users</h1>
            </div>
        </div>
      </div>
    </Layout>
  )
}
