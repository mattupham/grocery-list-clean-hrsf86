import React from 'react';
import AddGrocery from './AddGrocery.jsx';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => (
  <div className="groceries">
    <AddGrocery />
    {
      props.list.map(item => <div key={item}>{item}</div>)
    }
  </div>
)

export default GroceryList;