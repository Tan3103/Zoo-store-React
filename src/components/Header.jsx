import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import Order from "./Order";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));

  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}

      <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}₸</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товаров нет</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">ZOOSTORE</span>

        <ul className="nav">
          <li className="nav-main">
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/aboutUs">Про нас</Link>
          </li>
          <li> Кабинет </li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            <div
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              class="shop-cart-close"
              className="div-shop-cart"
            ></div>
            <div className="cart-and-close">
              <h1>Корзина:</h1>
              <div
                onClick={() => setCartOpen((cartOpen = !cartOpen))}
                class="shop-cart-close"
              >
                ✖
              </div>
            </div>

            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>

      <div className="presentation"></div>
    </header>
  );
}
