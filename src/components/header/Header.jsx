import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import Order from "../order/Order";
import "./Header.css";

const Header = ({ orders, onDelete, children }) => {
  let [cartOpen, setCartOpen] = useState(false);

  const showOrders = () => {
    let summa = 0;
    orders.forEach((el) => (summa += Number.parseFloat(el.price)));

    return (
      <div>
        {orders.map((el) => (
          <Order onDelete={onDelete} key={el.id} item={el} />
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
          {/* Add your login and logout functionality here */}
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen) => !cartOpen)}
          className={`shop-cart-button ${cartOpen ? "active" : ""}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            <div
              onClick={() => setCartOpen((cartOpen) => !cartOpen)}
              className="shop-cart-close"
            ></div>
            <div className="cart-and-close">
              <h1>Корзина:</h1>
              <div
                onClick={() => setCartOpen((cartOpen) => !cartOpen)}
                className="shop-cart-close"
              >
                ✖
              </div>
            </div>

            {orders.length > 0 ? showOrders() : showNothing()}
          </div>
        )}
      </div>

      <div className="presentation"></div>

      <div className="search-container">
        {children}
      </div>
    </header>
  );
};

export default Header;
