import React from 'react';
import GroceryItem from './GroceryItem.jsx'

let GroceryList = (props) => (
  <div className = "groceryList">
    {
      props.list.map((item) => <GroceryItem key={item.id} grocery={item.description} quantity={item.quantity}/>)
    }
  </div>
);

export default GroceryList;

{/*<div key={index}>{item}</div>*/}