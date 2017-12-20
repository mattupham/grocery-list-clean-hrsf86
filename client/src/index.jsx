import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx';
import GroceryItem from './components/GroceryItem.jsx';
import AddGrocery from './components/AddGrocery.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['apple','peach','banana','broccoli','pear']
    }
  }

  render () {
    return (
      <GroceryList list={this.state.list}/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));