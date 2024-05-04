import React from "react";
import "./Message.css";
import { useDispatch } from "react-redux";

import { handlerClickFunc } from "../../store/reducers";

const Message = () => {
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(handlerClickFunc());
  };

  return (
    <div className="message" onClick={handlerClick}>
      <div>
        <h2>Товар добавлен в корзину!</h2>
      </div>
    </div>
  );
};

export default Message;
