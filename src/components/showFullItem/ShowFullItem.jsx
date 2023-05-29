import React, { useContext } from "react";
import "./ShowFullItem.css";
import { useDispatch } from "react-redux";

import { addToOrderFunc } from "../../store/reducers";
import { Context } from '../../context';

const ShowFullItem = () => {
  const dispatch = useDispatch();
  const {fullItem, onShowItem} = useContext(Context);

  const onAdd = (item) => {
    dispatch(addToOrderFunc(item));
  };

  return (
    <div className="full-item">
      <div>
        <img
          className="full-item-img"
          src={fullItem.img}
          alt="Error"
          onClick={() => onShowItem(fullItem)}
        />

        <div className="full-item-main">
          <h1>{fullItem.title}</h1>

          <div className="full-description">
            <span>Описание:</span>
            <p>{fullItem.description}</p>
          </div>

          <div className="full-item-price">
            <span>ЦЕНА:</span>
            <p className="full-item-tg">{fullItem.price}тг.</p>
          </div>

          <div className="full-add-to-cart" onClick={() => onAdd(fullItem)}>
            Добавить в корзину
          </div>

          <img
            className="full-item-clear"
            src="img/btn-remove.svg"
            alt="Clear"
            onClick={() => onShowItem(fullItem)}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowFullItem;
