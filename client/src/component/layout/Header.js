import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Context';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {toast} from 'react-toastify';
import Navbar from 'react-bootstrap/Navbar';
import { useSearch } from '../../context/Search';
import axios from "axios";
import useCategory from '../../hooks/useCategory';
import{useCart} from '../../context/Cart';


export default function Header() {

  const [auth,setAuth] = useAuth();
  const [cart]=useCart();
  const [values, setValues] = useSearch();
  const Navigate = useNavigate();
  const [categories,setCategories] = useCategory();

  const handleLogout = ()=>{
     setAuth({
      ...auth, user:null,token:"",
      
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      Navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <header id="header" className="container-fluid position-static">

    <Navbar expand="lg" className="bg-body-tertiary " id="nav-1">
      <Container fluid>
      <span className="text-warning ">
              <h1 id="nav-heading">India-1 </h1>
              <p id="nav-para">India walo ki apani Dukan</p>
            </span>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex m-auto "  id="nav-search-div-s"  role="search" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              className=" nav-search-box"
              aria-label="Search"
               placeholder="&nbsp;&nbsp;Product name, Category name,etc"
               value={values.keyword}
               onChange={(e) => setValues({ ...values, keyword:e.target.value })}/>
            <Button  type="submit"  id="nav-search-button" className=" bg-warning  text-dark w-25">Search</Button>
          </Form>
          {!auth.user? <Link to="/login" type="button" className="btn btn-warning">Login</Link>
            :
            <Nav>
            <NavDropdown
              className='text-light'
              id="nav-dropdown-light-example"

              title={<span className='text-light fs-3'>{auth?.user?.name}</span>}
              menuVariant="light"
            >
              <NavDropdown.Item ><Link type="button"className="dropdown-item" to={`/dashboard/${auth?.user?.role ===1?"admin":"user"}`} >Dashboard</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link onClick={handleLogout} to="/" className="dropdown-item">Logout</Link>
              </NavDropdown.Item>
             
            </NavDropdown>
          </Nav>}
          <div className='pe-3'>
          <Link className=" position-relative" to="/cart">
          <FontAwesomeIcon className="cart fa-solid fa-cart-shopping fa-flip fs-3 ms-2 " id="loginCart" icon={faCartShopping} />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cart?.length}
              <span class="visually-hidden">unread messages</span>
            </span>
          </Link>
          </div>


          
          
          <div  className="float-sm-end float-xs-none " >
                <span></span>
          <span>
          
         </span>
          
                
              </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <nav id='nav-2-2' className="navbar navbar-expand-lg bg-warning justify-content-center ">
      <div id="nav-2">
        <ul className=" d-flex flex-wrap  me-auto mb-2 mb-lg-0">
        <li className="nav-item nav-link  " type="button">
        

          </li>

          <li className="nav-item nav-link  " type="button">
          <Link className="dropdown-item nav-link" to="/">Home</Link>
          </li>
  

              <li className="nav-item nav-item nav-link">
          <Link className="dropdown-item nav-link" to="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
   
  </header>

  

  </>
  )
}
