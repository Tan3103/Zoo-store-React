import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Context } from './context';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Items from "./components/items/Items";
import Categories from "./components/categories/Categories";
import Search from "./components/search/Search";
import ShowFullItem from "./components/showFullItem/ShowFullItem";
import AboutUs from "./components/aboutUs/AboutUs";
import Message from "./components/message/Message";
import ErrorAlert from "./components/errorAlert/ErrorAlert";
import NewItem from "./components/newItem/NewItem";

function App() {
  const [, setIsLoaded] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [items, setItems] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);

  const [postTitle, setPostTitle] = useState('');
  const [postCategory, setPostCategory] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [postPrice, setPostPrice] = useState('');
  const [postImg,  setPostImg] = useState();
  
  const message = useSelector(state => state.message);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchValue) {
      const filteredItems = items.filter((el) =>
        el.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setCurrentItems(filteredItems);
    }
  }, [items, searchValue]);

  const fetchData = async () => {
    try {
      const itemsResponse = await axios.get(
        "https://63887325d94a7e50409bdb32.mockapi.io/api/items/item"
      );

      setItems(itemsResponse.data);
      setCurrentItems(itemsResponse.data);
      setIsLoaded(true);
    } catch (error) {
      setError(error);
    }
  };

  const onDelete = () => {
    setPostTitle('');
    setPostCategory('');
    setPostDescription('');
    setPostPrice('');
    setPostImg('');
  };

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(items);
    } else {
      setCurrentItems(items.filter((el) => el.category === category));
    }
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem((prevState) => !prevState);
  };

  const onSearchInput = (e) => {
    if (e.target.value === "") {
      setCurrentItems(items);
    }
    const searchInputValue = e.target.value;
    setSearchValue(searchInputValue);
  };

  const onSearchClear = (e) => {
    setSearchValue("");
    setCurrentItems(items);
  };

  if (error) {
    return (
      <div className="wrapper">
        <ErrorAlert message="Ошибка при загрузке данных. Пожалуйста, повторите попытку позже." />
      </div>
    );
  }

  return (
    <Context.Provider
      value={{  
        items,
        searchValue,
        setSearchValue,
        onShowItem,
        fullItem,
        postTitle,
        setPostTitle,
        postPrice,
        setPostPrice,
        postImg,
        setPostImg,
        setItems,
        postCategory,
        setPostCategory,
        postDescription,
        setPostDescription,
        onDelete
      }}
    >
      <div className="wrapper">
        <Header>
          <Search searchValue={searchValue} onSearchInput={onSearchInput} onSearchClear={onSearchClear}/>
        </Header>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Categories chooseCategory={chooseCategory} />
                <Items onShowItem={onShowItem} items={currentItems} />
              </div>
            }
          />

          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/newItem"  element={<NewItem />} />
        </Routes>

        {showFullItem && (
          <ShowFullItem
            onShowItem={onShowItem}
          />
        )}

        {message && <Message/>}

        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;