import React, { Component } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Items from "./components/items/Items";
import Categories from "./components/categories/Categories";
import Search from "./components/search/Search";
import ShowFullItem from "./components/showFullItem/ShowFullItem";
import AboutUs from "./components/aboutUs/AboutUs";
import Message from "./components/message/Message";
import ErrorAlert from "./components/errorAlert/ErrorAlert";

class App extends Component {
  state = {
    isLoaded: false,
    orders: [],
    currentItems: [],
    items: [],
    showFullItem: false,
    message: false,
    fullItem: {},
    searchValue: "",
    error: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    // Выполнение действий при обновлении компонента или изменении его состояния
    if (prevState.searchValue !== this.state.searchValue) {
      // Изменилось значение поиска, обновляем текущие элементы
      const { items, searchValue } = this.state;
      const filteredItems = items.filter((el) =>
        el.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      this.setState({ currentItems: filteredItems });
    }
  }

  componentWillUnmount() {
    // Размонтирование компонента
    console.log("Компонент размонтирован");
  }

  componentDidCatch(error, errorInfo) {
    // Граница обработки ошибок для перехвата и обработки исключений, возникающих в дочерних компонентах
    console.error("Ошибка, перехваченная в компоненте App:", error);
    console.error("Информация об ошибке:", errorInfo);
    this.setState({ error });
  }

  fetchData = async () => {
    try {
      const itemsResponse = await axios.get(
        "https://63887325d94a7e50409bdb32.mockapi.io/api/items/item"
      );

      this.setState({
        items: itemsResponse.data,
        currentItems: itemsResponse.data,
        isLoaded: true,
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  addToOrder = (item) => {
    const { orders } = this.state;

    let isInArray = false;

    orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });

    if (!isInArray) {
      this.setState({ orders: [...orders, item] });
      this.handlerClick();
    }
  };

  deleteOrder = (id) => {
    const { orders } = this.state;

    this.setState({ orders: orders.filter((el) => el.id !== id) });
  };

  chooseCategory = (category) => {
    const { items } = this.state;

    if (category === "all") {
      this.setState({ currentItems: items });
      return;
    }

    this.setState({
      currentItems: items.filter((el) => el.category === category),
    });
  };

  onShowItem = (item) => {
    this.setState((prevState) => ({
      fullItem: item,
      showFullItem: !prevState.showFullItem,
    }));
  };

  handlerClick = () => {
    this.setState((prevState) => ({
      message: !prevState.message,
    }));
  };

  onSearchInput = (e) => {
    const searchInputValue = e.target.value;

    this.setState({ searchValue: searchInputValue }, () => {
      const { items, searchValue } = this.state;

      const filteredItems = items.filter((el) =>
        el.title.toLowerCase().includes(searchValue.toLowerCase())
      );

      this.setState({ currentItems: filteredItems });
    });
  };

  render() {
    const {
      orders,
      currentItems,
      showFullItem,
      fullItem,
      message,
      searchValue,
      error,
    } = this.state;

    if (error) {
      return (
        <div className="wrapper">
          <ErrorAlert message="Ошибка при загрузке данных. Пожалуйста, повторите попытку позже." />
        </div>
      );
    }

    return (
      <div className="wrapper">
        <Header orders={orders} onDelete={this.deleteOrder}>
          <Search
            searchValue={searchValue}
            onSearchInput={this.onSearchInput}
          />
        </Header>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Categories chooseCategory={this.chooseCategory} />
                <Items
                  onShowItem={this.onShowItem}
                  items={currentItems}
                  onAdd={this.addToOrder}
                />
              </div>
            }
          ></Route>

          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>

        {showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={fullItem}
            handlerClick={this.handlerClick}
          />
        )}

        {message && <Message handlerClick={this.handlerClick} />}

        <Footer />
      </div>
    );
  }
}

export default App;
