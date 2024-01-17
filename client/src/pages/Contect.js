import React from 'react'
import Layout from '../component/layout/Layout'

export default function Contect() {
  return (
    <Layout>
    <div class="container">
        <h2 class="text-center fs-1 pt-5 pb-3 ">Contact Us</h2>
        
      <div class="row mb-5">
        <div class="col-sm-6 col-xs-12">
          <div class="text-center" >
            <img id="contact-img" className='w-50
            ' src="https://www.agenciaeplus.com.br/wp-content/uploads/2017/03/Social-Commerce-300x266.png" alt="" />
          </div>
        </div>
        <div class="col-sm-6 col-xs-12 me-xs-5">
          <div>
            <form action="" id="contact-form">
                 <p ><b> Name</b></p>
                <input type="text" class="w-100 contact-input"   placeholder="Enter your Name"/>
                <p><b>Email</b></p>
                <input type="email" class="w-100 contact-input"   placeholder="Enter your Email"/>
                <p><b>Message</b></p>
                <textarea name="Message" class="w-100 contact-input" rows="3" placeholder="Enter your Message"></textarea>

            
            <input type="submit" class="btn btn-warning w-100 mt-3" value="Submit" onclick="login()"/>
            </form>
          </div>
        </div>
      </div>
    </div>
   
    </Layout>
  )
}
