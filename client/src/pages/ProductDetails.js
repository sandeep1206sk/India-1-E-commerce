import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../component/layout/Layout";
import {toast} from 'react-toastify';
import{useCart} from '../context/Cart';
import Rating from '../component/layout/Rating'
export default function ProductDetails() {
    const params = useParams();
    const navigate = useNavigate();
    const [cart,setCart]= useCart();
    const [product, setProduct] = useState({});
  
    //initalp details
    useEffect(() => {
      if (params?.slug) getProduct();
    }, [params?.slug]);
    //getProduct
    const getProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/product/get-product/${params.slug}`
        );
        setProduct(data?.product);
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <Layout>
        <div className="row container mt-2">
          <div className="col-md-6">
            <img
              src={`http://localhost:8000/api/product/product-photo/${product._id}`}
              className="card-img-top"
              alt={product.name}
              height="300"
              width={"350px"}
            />
          </div>
          <div className="col-md-6 ">
            <h1 className="text-center">Product Details</h1>
            <h6>Name : {product.name}</h6>
            <h6>Description : {product.description}</h6>
            <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
            <h6>Price : {product.price}</h6>
            <h6>Category : {product?.category?.name}</h6>
            <button class="btn btn-secondary ms-1" 
                  onClick={() => {
                      setCart([...cart, product]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, product])
                      );
                      toast.success("Item Added to cart");
                    }}>ADD TO CART</button>
          </div>
        </div>
        <hr />
      </Layout>
    );
  };
