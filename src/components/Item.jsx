import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <div
          className="div-img"
          onClick={() => this.props.onShowItem(this.props.item)}
        >
          <img src={this.props.item.img} alt="Error" />
        </div>
        <h4>{this.props.item.title}</h4>
        <p>ЦЕНА: {this.props.item.price}₸</p>
        <div
          className="add-to-cart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </div>
      </div>
    );
  }
}

export default Item;
