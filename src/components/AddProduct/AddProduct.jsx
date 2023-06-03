import React from "react";

const AddProduct = () => {
  return (
    <form className="border p-5">
      <lable id="name">Product Name</lable>
      <input
        type="text"
        name="name"
        className="input input-bordered input-info w-full max-w-xs"
      />
      <lable id="dis">Discription</lable>
      <textarea
        type="text"
        name="dis"
        className="input input-bordered input-info w-full max-w-xs"
      />
      <p id="dis">Category</p>
      <select className="rounded border w-full max-w-xs p-2" name="" id="">
          <option value="women-cloth">women's clothing</option>
          <option value="men-cloth">men's clothing</option>
      </select>

      <lable id="img">Image URL</lable>
      <input
        type="text"
        name="dis"
        className="input input-bordered input-info w-full max-w-xs"
      />
      <lable id="img">Price</lable>
      <input
        type="number"
        name="dis"
        className="input input-bordered input-info w-full max-w-xs"
      />

     <button type="submit" className="btn btn-primary mt-4 block">Add Product</button>
    </form>
  );
};

export default AddProduct;
