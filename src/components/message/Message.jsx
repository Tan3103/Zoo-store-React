import React, { Component } from "react";
import "./Message.css";

export class Message extends Component {
  render() {
    return (
      <div className="message" onClick={() => this.props.handlerClick()}>
        <div>
          <h2>Товар добавлен в корзину!</h2>
        </div>
      </div>
    );
  }
}

export default Message;