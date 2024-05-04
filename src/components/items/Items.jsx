import React, { Component } from "react";

import Item from "../item/Item";
import "./Items.css";

class Items extends Component {
  componentDidMount() {
    // Lifecycle method - called after the component is mounted to the DOM
    console.log("Items component did mount");
  }

  componentDidUpdate(prevProps) {
    // Lifecycle method - called after the component updates
    console.log("Items component did update");
    // You can compare previous props and perform additional actions if needed
    if (prevProps.items !== this.props.items) {
      console.log("Items props updated");
    }
  }

  componentWillUnmount() {
    // Lifecycle method - called before the component is unmounted from the DOM
    console.log("Items component will unmount");
  }

  componentDidCatch(error, errorInfo) {
    // Lifecycle method - called when an error occurs in child components
    console.log("Items component caught an error:", error);
    // You can handle the error and perform additional actions
    // For example, you can log the error or display an error message
  }

  render() {
    const { items, onShowItem, onAdd } = this.props;

    return (
      <main>
        {items.map((el) => (
          <Item
            onShowItem={onShowItem}
            key={el.id}
            item={el}
            onAdd={onAdd}
          />
        ))}
      </main>
    );
  }
}

export default Items;
