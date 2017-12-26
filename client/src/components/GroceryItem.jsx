import React from 'react';

const GroceryItem = (props) => (
  <div>{props.grocery}{': '}{props.quantity}</div>
)

export default GroceryItem;