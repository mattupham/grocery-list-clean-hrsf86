import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render () {
    return (
      <div>
        <div>Description:<input /></div>
        <div>Quantity:<input /><button type="addGrocery">Add Grocery</button></div>
      </div>);
  }
}

export default AddGrocery;

