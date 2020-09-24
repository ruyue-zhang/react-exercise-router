import React from 'react';
import products from '../mockups/data.json'


class Product extends React.Component {
  render() {
    const id = this.props.match.params.id;
     let detail = {};
     Object.keys(products).forEach(name => {
      if (products[name].id === Number(id)) {
        detail = products[name];
      }
    });
    return (<div>
      <span>Products Details:</span>
      {Object.keys(detail).map((key, index) => (
        <p key={index}>{`${key}: ${detail[key]}`}</p>
      ))}
      <p>URL: {this.props.match.url}</p>
     </div> 
    );
  }
}

export default Product;

