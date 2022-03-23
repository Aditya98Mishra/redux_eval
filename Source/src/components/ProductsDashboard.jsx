import React, { useEffect} from "react";
import axios from "axios";
import { useState } from "react";

import { Link } from "react-router-dom";


export const Products = () => {
  const [data,setData]=useState([])

  useEffect(() =>{
    loadData();
  },[])
  const loadData =async () =>{
    try{
    const res =  axios({
      method: 'GET',
      url:"https://movie-fake-server.herokuapp.com/products",}).then((res)=>{
      setData(res.data)
    })
    console.log(res)
    // setData(d);
    }catch(e){
      console.log("error",e);
    }
  }
  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
    console.log(e.value);

  };
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {/* map throught th products  list and display the results */}
        {data &&
          data.map((itm,i) => {
            return <div key={i} style= {{display:"inline-block",margin:"10px"}}>
            <Link to={`/products/${itm.id}`}>
            <img src={`${itm.image}`}/>
            <h3>{itm.title}</h3>
            <p>{itm.brand}</p>
            <p>{itm.price}</p>
            </Link>
            </div>;
          })}
      </div>
    </>
  );
};