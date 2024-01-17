import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

export default function AdminMenu() {
  return (
    <div>
        <h4>Admin Panel</h4>
    <ListGroup>
      <ListGroup.Item><Link to="/dashboard/admin/create-category">Create Category</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/dashboard/admin/create-product">Create product</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/dashboard/admin/users">users</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/dashboard/admin/products">Product</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/dashboard/admin/orders"> Orders</Link></ListGroup.Item>
      
    </ListGroup>

  

    </div>
  )
}
