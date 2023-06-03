import React from 'react';

const Product = ({product}) => {
     console.log(product);
     const {id, title, image, description, rating, price, category } = product;

     return (
          <div className="card lg:card-side shadow-xl">
          <figure className='w-2/3 h-auto'><img src={image} alt="Album"/></figure>
          <div className="card-body">
               <div className="update-delete flex gap-3">
                    <button className='btn'>Update</button>
                    <button className='btn'>Delete</button>
               </div>
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <span>{category}</span>
            <strong>Price: {price}</strong>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
     );
};

export default Product;