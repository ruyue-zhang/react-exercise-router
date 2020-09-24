import React from 'react';
import products from '../mockups/data.json'


class Products extends React.Component {
  render() {
    return (<div>
      <span>All Productions:</span>
      {Object.keys(products).map(name => (
        <p key={products[name].id}>
          <a href={`/products/${products[name].id}`}>{name}</a>
        </p>
      ))}
     </div> 
    );
  }
}

export default Products;

