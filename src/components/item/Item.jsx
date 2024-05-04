import React from "react";
import { useDispatch } from "react-redux";

import "./Item.css";
import { addToOrderFunc, handlerClickFunc } from "../../store/reducers";

const Item = ({ item, onShowItem }) => {
  const dispatch = useDispatch();

  const onAdd = (item) => {
    dispatch(addToOrderFunc(item), handlerClickFunc());
  };

  return (
    <div className="item">
      <div className="div-img" onClick={() => onShowItem(item)}>
        <img src={item.img} alt="Error" />
      </div>
      <h4>{item.title}</h4>
      <p>ЦЕНА: {item.price}₸</p>
      <div className="add-to-cart" onClick={() => onAdd(item)}>
        +
      </div>
    </div>
  );
};

export default Item;