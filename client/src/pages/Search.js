import React from 'react'
import { useSearch } from "../context/Search";
import Layout from '../component/layout/Layout';
import { useCart } from '../context/Cart';
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
export default function Search() {
    const [values, setValues] = useSearch();
    const [cart,setCart]= useCart();
    const Navigate = useNavigate();


    return (
      <Layout title={"Search results"}>
        <div className="container">
          <div className="text-center">
            <h1>Search Resuts</h1>
            <h6>
              {values?.results.length < 1
                ? "No Products Found"
                : `Found ${values?.results.length}`}
            </h6>
            <div className="d-flex flex-wrap mt-4">
              {values?.results.map((p) => (
                <div className="card m-auto border border-3 border-dark mt-2" style={{ width: "18rem" }}>
                  <img
                    src={`http://localhost:8000/api/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                      {p.description.substring(0, 30)}...
                    </p>
                    <p className="card-text"> M.R.P.: ₹ {p.price}</p>
                    <button class="btn btn-primary ms-1" onClick={()=>Navigate(`/product/${p.slug}`)}>More Details</button>
                  <button class="btn btn-warning ms-1" 
                  onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}>Add to caet</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  };
