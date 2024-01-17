import React from 'react'
import { Link } from 'react-router-dom'


export default function UserMenu() {
  return (
    <div >
         <div>
        <h4 className=''>User Panel</h4>
    <div class="list-group">
        <Link to="/dashboard/user/profile" class="list-group-item list-group-item-action active" aria-current="true">
        Profile
        </Link>
        <Link to="/dashboard/user/orders" class="list-group-item list-group-item-action">Orders</Link>

      </div>

  

    </div> 
    </div>
  )
}
