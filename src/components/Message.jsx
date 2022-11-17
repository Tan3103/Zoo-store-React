import React, { Component } from "react";

export class Message extends Component {
  render() {
    return (
      <div className="message" onClick={() => this.props.handlerClick()}>
        <div>
          <h2>Товар добавлен в корзину!</h2>

          <img
            className="full-item-clear"
            src="img/btn-remove.svg"
            alt="Clear"
            onClick={() => this.props.handlerClick()}
          />
        </div>
      </div>
    );
  }
}

export default Message;