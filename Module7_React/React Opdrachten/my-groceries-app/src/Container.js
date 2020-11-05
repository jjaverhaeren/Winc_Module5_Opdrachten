import React, { Component } from "react";
import ShoppingCart from "./components/ShoppingCart";
import GroceryList from "./components/GroceryList";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
     
      ],
      shoppingListItems: [],
      inputvalue: "",
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    // this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickGroceryItem(propsItem) {
    this.state.groceryItems.forEach(item => {
      if (item.id === propsItem.id) {
        this.state.shoppingListItems.push(item);
      }
    });
    this.setState({ shoppingListItems: this.state.shoppingListItems });
  }

  emptyCart() {
    this.setState({ shoppingListItems: [] });
  }

  // handleChangeInput(event) {
  //   this.setState({ inputvalue: event.target.value });
  // }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state.groceryItems)
    let newId = this.state.groceryItems.length + 1;
    let newTitle = event.target.firstChild.value;
    let newItem = { id: newId, title: newTitle };
    this.state.groceryItems.push(newItem);
    this.setState({ groceryItems: this.state.groceryItems });
    event.target.firstChild.value = "";
    // console.log(newItem);
    // console.log(event.target.firstChild.value);
  }

  render() {
    return (
      <div>
        <GroceryList
          items={this.state.groceryItems}
          handleClick={this.handleClickGroceryItem}
          // handleChangeInput={this.handleChangeInput}
          handleSubmit={this.handleSubmit}
          inputvalue={this.state.inputvalue}
        />
        <ShoppingCart
          items2={this.state.shoppingListItems}
          emptyCart={this.emptyCart}
        />
      </div>
    );
  }
}

export default Container;
