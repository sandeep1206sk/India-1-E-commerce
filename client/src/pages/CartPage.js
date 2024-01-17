import React, { useState, useEffect } from "react";
import Layout from "../component/layout/Layout";
import { useCart } from "../context/Cart";
import { useAuth } from "../context/Context";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import {toast} from 'react-toastify';


export default function CartPage() {
    const [auth, setAuth] = useAuth();
    const [cart, setCart] = useCart();
    const [clientToken, setClientToken] = useState("");
    const [instance, setInstance] = useState("");
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(1);
    const navigate = useNavigate();
  
    //total price
    const totalPrice = () =>{
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
    //get payment gateway token
    const getToken = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/product/braintree/token");
        setClientToken(data?.clientToken);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getToken();
    }, [auth?.token]);
  
    //handle payments
    const handlePayment = async () => {
      try {
        setLoading(true);
        const { nonce } = await instance.requestPaymentMethod();
        const { data } = await axios.post("http://localhost:8000/api/product/braintree/payment", {
          nonce,
          cart,
        });
        setLoading(false);
        localStorage.removeItem("cart");
        setCart([]);
        navigate("/dashboard/user/orders");
        toast.success("Payment Completed Successfully ");
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    const cashOnD = async () => {
      try {
        setLoading(true);
        const { data } = await axios.post("http://localhost:8000/api/product/braintree/payment", {
          cart,
        });
        setLoading(false);
        localStorage.removeItem("cart");
        setCart([]);
        navigate("/dashboard/user/orders");
        toast.success("Payment Completed Successfully ");
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    const add=(pid)=>{
      
      setCount(count + 1);
    }
    const subtract=(pid)=>{
      setCount(count - 1);
    }
    
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <h1 className="text-center bg-light p-2 mb-1">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>
            <h4 className="text-center">
              {cart?.length
                ? `You Have ${cart.length} items in your cart ${
                    auth?.token ? "" : "please login to checkout"
                  }`
                : " Your Cart Is Empty"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 ">
            {cart?.map((p) => (
              <div className="row mb-2 pt-3 card flex-row border border-3 border-dark">
                <div className="col-md-4">
                  <img
                    src={`http://localhost:8000/api/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    width="100px"
                    height={"100px"}
                  />
                </div>
                <div className="col-md-8">
                  <p>{p.name}</p>
                  <p>{p.description.substring(0, 30)}</p>
                  <p>Price : {p.price}</p>
                  <button className="border border-0">
                  <i class="fa-solid fa-trash fs-5" style={{color: "#ffc800",}}  onClick={() => removeCartItem(p._id)}></i>
            
                  </button>
                  <div className=" mt-md-3" >
                    <button  onClick={() => add(p._id)}><i className="fa-solid fa-plus fs-4   bg-warning" style={{color: "000000",}} ></i></button>
                    <input type="text" class="w-50" value={count} onChange={(e)=>setCount(e.target.value)}/>
                    <button onClick={() => subtract(p._id)}><i className="fa-solid fa-minus fs-4    bg-warning" style={{color: "000000",}} ></i></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 text-center">
            <h2>Cart Summary</h2>
            <p>Total | Checkout | Payment</p>
            <hr />
            <h4>Total : {totalPrice()} </h4>
            {auth?.user?.address ? (
              <>
                <div className="mb-3">
                  <h4>Current Address</h4>
                  <h5>{auth?.user?.address}</h5>
                  <button
                    className="btn btn-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                </div>
              </>
            ) : (
              <div className="mb-3">
                {auth?.token ? (
                  <button
                    className="btn btn-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                ) : (
                  <button
                    className="btn btn-warning"
                    onClick={() =>
                      navigate("/login", {
                        state: "/cart",
                      })
                    }
                  >
                    Plase Login to checkout
                  </button>
                )}
              </div>
            )}
              <div className="mt-2">
              {!clientToken || !cart?.length ? (
                ""
              ) : (
                <>
                  <DropIn
                    options={{
                      authorization: clientToken,
                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(instance) => setInstance(instance)}
                  />

                  <button
                    className="btn btn-warning"
                    onClick={handlePayment}
                    disabled={loading || !instance || !auth?.user?.address}
                  >
                    {loading ? "Processing ...." : "Make Payment"}
                  </button>
                 
                </>
              )}
               <button
                    className="btn btn-warning ms-2"
                    onClick={cashOnD}
                    disabled={loading || !instance || !auth?.user?.address}
                  >
                   C O D
                  </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
