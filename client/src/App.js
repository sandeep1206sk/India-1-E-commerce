
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contect from './pages/Contect';

import PagenotFound from './pages/PagenotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/user/Dashboard';

import AdminRoute from './component/router/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import Private from './component/router/Private';
import CreateCategory from './pages/admin/CreateCategory';
import CreateProduct from './pages/admin/CreateProduct';
import Users from './pages/admin/Users';

import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/admin/Products';
import UpdateProduct from './pages/admin/UpdateProduct';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CartPage from './pages/CartPage';
import AdminOrders from './pages/admin/AdminOrders';



function App() {
  return (
<>
<ToastContainer />
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/product/:slug' element={<ProductDetails/>}/>
  <Route path='/search' element={<Search/>}/>
  <Route path='/cart' element={<CartPage/>}/>
  <Route path='/categories' element={<Categories/>}/>
  <Route path='/contact' element={<Contect/>}/>
  <Route path='/dashboard' element={<Private/>}>
  <Route path='user' element={<Dashboard/>}/>
  <Route path='user/orders' element={<Orders/>}/>
  <Route path='user/profile' element={<Profile/>}/>
  </Route>
  <Route path='/dashboard' element={<AdminRoute/>}>
  <Route path='admin' element={<AdminDashboard/>}/>
  <Route path='admin/create-category' element={<CreateCategory/>}/>
  <Route path='admin/create-product' element={<CreateProduct/>}/>
  <Route path='admin/product/:slug' element={<UpdateProduct/>}/>
  <Route path='admin/products' element={<Products/>}/>
  <Route path='admin/users' element={<Users/>}/>
  <Route path='admin/orders' element={<AdminOrders/>}/>
  </Route>
  
  <Route path='/register' element={<Register/>}/>

  <Route path='/login' element={<Login/>}/>
  <Route path='/*' element={<PagenotFound/>}/>
 </Routes>
</>
  );
}

export default App;
