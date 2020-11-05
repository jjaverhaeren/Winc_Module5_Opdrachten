import React, { Component } from "react";
import ShoppingCart from "./components/ShoppingCart";
import GroceryList from "./components/GroceryList";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Paprika" },
        { id: 2, title: "Appels" },
        { id: 3, title: "Brood" },
        { id: 4, title: "Melk" },
        { id: 5, title: "Muesli" },
      ],
      shoppingListItems: [
 
      ],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
  }

  handleClickGroceryItem(propsItem) {
    this.state.groceryItems.forEach(item => {
      if (item.id === propsItem.id) {
        this.state.shoppingListItems.push(item)
      }
    })
    this.setState({shoppingListItems: this.state.shoppingListItems})
  }

emptyCart() {
  this.setState({shoppingListItems: []})
}

  render() {
    return (
      <div>
        <GroceryList
          items={this.state.groceryItems}
          handleClick={this.handleClickGroceryItem}
        />
        <ShoppingCart items2={this.state.shoppingListItems} emptyCart={this.emptyCart}/>
      </div>
    );
  }
}

export default Container;
