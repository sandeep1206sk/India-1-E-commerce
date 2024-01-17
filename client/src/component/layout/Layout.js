import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout(props) {
  return (
    <div>
        <Header/>
        <main style={{minHeight:'80vh'}}>
        {props.children}
        </main>
        <ToastContainer />
        <Footer/>
    </div>
  )
}
