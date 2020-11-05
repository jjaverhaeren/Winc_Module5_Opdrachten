import React, { Component } from "react";
import List1 from "./components/List1";
import List2 from "./components/List2";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 1, title: "apple" },
        { id: 2, title: "milk" },
        { id: 3, title: "bread" },
      ],
      items2: [
        { id: 1, title: "apple2" },
        { id: 2, title: "milk2" },
        { id: 3, title: "bread2" },
      ],
    };
  }
  render() {
    return (
      <div>
        <List1 items={this.state.items} />
        <List2 items2={this.state.items2} />
      </div>
    );
  }
}

export default Container;
