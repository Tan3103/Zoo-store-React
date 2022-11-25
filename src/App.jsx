import { Routes, Route } from "react-router-dom";
import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import AboutUs from "./components/AboutUs";
import Message from "./components/Message";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title:
            "Беззерновой корм Farmina N&D Adult для средних и крупных собак",
          img: "img/133817.jpg",
          description:
            "Полнорационный беззерновой корм для собак средних и крупных пород. Линия продуктов Natural & Delicious производится по передовым технологиям с использованием современной системы контроля качества. Система длительного сохранения витаминов основана на внесении витаминов внутрь гранулы после процесса экструзии, что обеспечивает сохранение натуральности и гарантирует эффективность витаминов  на протяжении всего срока годности продукта. Наилучшей системой питания для животных является система, которая соответствует генетически заложенному и биологически соответствующему питанию.",
          category: "food",
          price: "70800",
        },
        {
          id: 2,
          title:
            "Кормовая добавка Drucal для кошек и собак с ослабленной мускулатурой",
          img: "img/Drucal.jpg",
          description:
            "Смесь высококачественных минеральных веществ, обогащенная декстрозой (виноградным сахаром) и морскими водорослями. Декстроза (виноградный сахар) ускоряет обмен веществ и улучшает кровоснабжение, а морские водоросли — состояние кожи и шерсти и усиливают естественный окрас.",
          category: "vitamins",
          price: "3700",
        },
        {
          id: 3,
          title: 'Игрушка "Резиновый мячик" для собак, Trixie - 6 см',
          img: "img/trixie.jpg",
          description:
            "Игрушка для собак, резиновый мячик. Набор мячей, резиновые. Неоновые и обычные в ассортименте. Продается набором 24 штуки. Сделаны из вспененной резины. Цвет в ассортименте. ",
          category: "toys",
          price: "1050",
        },
        {
          id: 4,
          title: "Носочки Trixie для собак, Хлопок, 2 шт - L",
          img: "img/Носочки.jpg",
          description:
            "- хлопок/эластан, с противоскользящей резиновой подошвой, рекомендуются для пожилых собак, идеальны для повседневной защиты лап и при заживлении ран, безопасны для мебели и пола, цвет: серый",
          category: "clothes",
          price: "3030",
        },
        {
          id: 5,
          title: "Намордник для крупных пород собак Julius-K9 - XL - 35-31 см",
          img: "img/Намордник.jpg",
          description:
            "Намордник для крупных пород собак Julius-K9 (например Немецкий дог) XL, С металлическими крепкими заклепками для дополнительной безопасности.",
          category: "muzzle",
          price: "16090",
        },
        {
          id: 6,
          title:
            "Корм Royal Canin Kitten для котят в возрасте от 4-х до 12 месяцев",
          img: "img/Кошка.jpg",
          description:
            "Сухой корм для котят в возрасте до 12 месяцев. В возрасте с 4 до 12 месяцев у котят замедляется рост, идет набор мышечной массы. Кроме того, иммунная система котенка на данном этапе еще формируется. Поэтому для поддержания котенка на этой важной стадии очень важно адаптированное питание.",
          category: "food",
          price: "2290",
        },
      ],
      showFullItem: false,
      message: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Categories chooseCategory={this.chooseCategory} />
                <Items
                  onShowItem={this.onShowItem}
                  items={this.state.currentItems}
                  onAdd={this.addToOrder}
                />
              </div>
            }
          ></Route>

          <Route path="/aboutUs" element={<AboutUs />}></Route>
        </Routes>

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
            handlerClick={this.handlerClick}
          />
        )}

        {this.state.message && (
          <Message 
            handlerClick={this.handlerClick}
          />
        )}

        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  handlerClick () {
    this.setState({ message: !this.state.message });
  }

  addToOrder(item) {
    let isInArray = false;

    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });

    if (!isInArray){ 
      this.setState({ orders: [...this.state.orders, item] });
      this.handlerClick();
    }
  }
}

export default App;
