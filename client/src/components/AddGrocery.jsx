import React from 'react';

let AddGrocery = (props) => (
  <div>
    <h1>Grocery List</h1>
    <div>Description:
      <input 
        onChange={props.handleDescriptionChange}
        className="description"
      />
    </div>
    <div>Quantity:
      <input 
        className="quantity" 
        onChange={props.handleQuantityChange}
      />
      <button 
        onClick={props.handleClick} 
        type="button">
        Add Grocery!
      </button>
    </div>
  </div>
);

export default AddGrocery;

