import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { deleteOrderFunc } from "../../store/reducers";

const Order = ({ item }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteOrderFunc(id));
  };
  return (
    <div className="item">
      <img src={item.img} alt="Error" />
      <h5>{item.title}</h5>
      <p>{item.price}₸</p>
      <FaTrash
        className="delete-icon"
        onClick={() => onDelete(item.id)}
      />
    </div>
  );
};

export default Order;