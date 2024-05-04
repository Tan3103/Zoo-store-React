import React from "react";
import "./AboutUs.css";
import { useDispatch, useSelector } from "react-redux";

import { addCashFunc } from "../../store/reducers";

const AboutUs = () => {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  const addCash = () => {
    dispatch(addCashFunc(5));
  };

  return (
    <div className="AboutUs">
      <div className="about-main">
        <h1>О нашем интернет-зоомагазине</h1>
        
        <div>{cash}</div>
        <button onClick={() => addCash()}>+5</button>

        <p>
          ZooStore – Интернет-магазин товаров для домашних животных. В
          нашем ассортименте огромный выбор всего необходимого для кошек,
          собак, домашних грызунов и птиц.
        </p>

        <p>
          На страницах нашего Интернет-магазина вы найдёте большой выбор
          кормов от лучших мировых производителей, лакомства, наполнители,
          одежду и аксессуары, а также – ветеринарные препараты.
        </p>

        <p>
          Вы можете оплатить сделанный заказ нашему курьеру при получении
          покупки, либо осуществить онлайн-оплату на сайте банковской картой.
        </p>

        <p>
          Мы всегда готовы к обратной связи с нашими дорогими покупателями.
          Ваши замечания и предложения – залог нашего развития!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;