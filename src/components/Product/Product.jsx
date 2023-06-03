import React from 'react';

const Product = ({product}) => {
     console.log(product);
     const {id, title, image, description, rating, price } = product;

     return (
          <div className="card lg:card-side shadow-xl">
          <figure className='w-2/3 h-auto'><img src={image} alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <strong>Price: {price}</strong>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
     );
};

export default Product;