import React, { Component } from "react";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className="full-item">
        <div>
          <img
            className="full-item-img"
            src={this.props.item.img}
            alt="Error"
            onClick={() => this.props.onShowItem(this.props.item)}
          />

          <div className="full-item-main">
            <h1>{this.props.item.title}</h1>

            <div className="full-description">
              <span>Описание:</span>
              <p>{this.props.item.description}</p>
            </div>

            <div className="full-item-price">
              <span>ЦЕНА:</span>
              <p className="full-item-tg">{this.props.item.price}тг.</p>
            </div>

            <div
              className="full-add-to-cart"
              onClick={() => this.props.onAdd(this.props.item)}
            >
              Добавить в корзину
            </div>

            <img
              className="full-item-clear"
              src="img/btn-remove.svg"
              alt="Clear"
              onClick={() => this.props.onShowItem(this.props.item)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
