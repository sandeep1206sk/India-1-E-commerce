import React from 'react'
import '../pages/HomeSlide.css'

export default function HomeSlide() {
  return (
    <div>
          <div id="home" className="container-fluid">
      <div id="carouselExampleAutoplaying"  className="carousel slide home-2 " data-bs-ride="carousel"> 
        <div className="carousel-inner">
          <div id="home-carousel-1" className="carousel-item active ">
           <h1 >India-1</h1>
            <p className="text-dark fw-bold "><i> Indian largest marketplace fulfil all kinds of need people</i> </p>
          </div>
          <div id="home-carousel-2" className="carousel-item  ">
            <div className="row mt-5 mb-5 text-center ">
            
                <h4 id="best-deal">best deals</h4>
                 <h3>STARTING <span>₹</span>199</h3>
                 <p>Offers on clothing, footwear,<br/>beauty & more </p>
                 <p><span>FREE DELIVERY <br/>ON FIRST ORDER</span>
                <span>LETEST <br/>TRENDS</span></p>
             
                 
              </div>
              
            </div>
            <div id="home-carousel-3" className="carousel-item ">
            <div id="home-carousel-3-1" className=" d-flex ">
    
              <h5>UP <br/>TO</h5>              
          
              <h2>75% OFF!</h2>
        

            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
    
    </div>
  )
}



