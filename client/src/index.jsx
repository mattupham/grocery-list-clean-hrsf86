import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx'
import GroceryList from './components/GroceryList.jsx'
//let groceryListDataFile = require('../../database/data.js');
import Data from '../../database/data.js';
//console.log(groceryListData);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //accesses external list
      list: Data.groceryList,
      description: null,
      quantity: null
      
    };
    //bind to make 'this' work in different situations
    this.handleClick = this.handleClick.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }
  
  handleDescriptionChange(event){
    this.setState({description: event.target.value});
  }
  
  handleQuantityChange(event){
    this.setState({quantity: event.target.value});
  }

  buildGroceryObject(){
    //sets next item id
    let nextItemId = Data.groceryList.length + 1;
    let description = this.state.description;
    let quantity = this.state.quantity;
    let newItem = {id: nextItemId, quantity: quantity, description: description};
    return newItem;
  }
  
  addGroceryObject(newItem){
    //adds item to data file
    Data.groceryList.push(newItem);
  }
  
  resetState(){
    //sets state to contain updated data
    this.setState({
      list: Data.groceryList,
      description: null,
      quantity: null
      
    });
  }

  //handles a click from the Add Grocery! button
  handleClick(event) {
    //if contains data
    if (this.state.description !== null && this.state.quantity !== null) {
      console.log('clicked');
      let item = this.state.description;
      let groceries = Data.groceryList.map(grocery => grocery.description);
      
      let newItem = this.buildGroceryObject();
      this.addGroceryObject(newItem);
      console.log(groceries);
      this.resetState();
      // //if grocery list doesn't include item, add to list
      // if (groceries.includes(item) === false){
      //   let newItem = this.buildGroceryObject();
      //   this.addGroceryObject(newItem);
      //   console.log(this.state.list);
      // //if grocery list includes item, increment list by 1
      // } else {
      //   Data.groceryList.forEach(function(grocery, index){
      //     //console.log('item', item);
      //     console.log(Data.groceryList[index]['description']);
      //     if (Data.groceryList[index]['description'] === item) {
      //       Data.groceryList['quantity'] += 1;
      //       console.log('add 1');
      //     }
      //   });
      // }  
    } 
  }
  
  render () {
    return (
      <div>
        <AddGrocery 
          handleClick={this.handleClick} 
          handleDescriptionChange={this.handleDescriptionChange}
          handleQuantityChange={this.handleQuantityChange}
        />
        <GroceryList list={this.state.list}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));