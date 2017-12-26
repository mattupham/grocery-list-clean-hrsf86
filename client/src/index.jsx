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
  
  //handles a click from the Add Grocery! button
  //IF SAME ITEM, UPDATE QUANTITY++
  handleClick(event) {
    //list of groceries
    let item = this.state.description;
    let groceries = Data.groceryList.map(grocery => grocery.description);
    //if entered grocery is included in groceries, loop through and add quantity
    if (groceries.includes(item)) {
      //alert('included');
      Data.groceryList.forEach(function(grocery, index){
        //console.log('item', item);
        console.log(Data.groceryList[index]['description']);
        if (Data.groceryList[index]['description'] === item) {
          Data.groceryList['quantity'] += 1;
          console.log('add 1');
        }
      });
    }
    //console.log(groceries);
    if (this.state.description !== null){
      //console.log(event);
      //sets next item id
      let nextItemId = Data.groceryList.length + 1;
      let description = this.state.description;
      let quantity = this.state.quantity;
      let newItem = {id: nextItemId, quantity: quantity, description: description};
      //adds item to data file
      Data.groceryList.push(newItem);
      //sets state to contain updated data
      this.setState({
        list: Data.groceryList,
        description: null,
        quantity: null
        
      });
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