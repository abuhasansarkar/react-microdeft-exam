import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    
     const { register, handleSubmit } = useForm();
     const [data, setData] = useState("");


     useEffect(() => {
          fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: data.productTitle,
                    price: data.productPrice,
                    description: data.productDescription,
                    image: data.productImgUrl,
                    category: 'data.category'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


     } , [])

  return (
     <form className="bg-sky-400 p-5" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <h2 className="text-center text-lg">Add New Product</h2>
      <input className="border p-2 block w-full mb-4" type="text" {...register("productTitle")} placeholder="Product name" />
      
      <textarea className="border p-2 block w-full mb-4" {...register("productDescription")} placeholder="Product Description" />

      <select className="border p-2 block w-full mb-4" {...register("category", { required: true })}>
        <option value="">Select...</option>
        <option value="menCloth">Man Cloths</option>
        <option value="womenCloth">Women Cloths</option>
      </select>

      <input className="border p-2 block w-full mb-4" type="url" {...register("productImgUrl")} placeholder="Product Image Url" />

      <input className="border p-2 block w-full mb-4" type="number" {...register("productPrice")} placeholder="Product Price" />

      <p>{data}</p>
      <input className="btn w-full" type="submit" />
    </form>
  );
};

export default AddProduct;
