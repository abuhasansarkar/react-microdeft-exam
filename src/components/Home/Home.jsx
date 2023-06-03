// import React from 'react';

import { useEffect, useState } from "react";
import Product from "../Product/Product";
import AddProduct from "../AddProduct/AddProduct";

const Home = () => {
     const [products, setProducts] = useState([]);
     useEffect(() => {
          fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
     }, [])
     return (
          <div className="max-w-screen-xl mx-auto flex gap-5">
              <div className="products-area w-3/4 ">
               <div className="grid grid-cols-2 gap-3">
               {
                    products.map(product => <Product key={product.id} product={product}/>)
               }
               </div>
              </div>
              <div className="add-product-area w-1/4 ">
                    <AddProduct/>
              </div>
          </div>
     );
};

export default Home;