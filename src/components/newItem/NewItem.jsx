import React, { useContext } from 'react';
import axios from 'axios';

import { Context } from '../../context';
import "./NewItem.css";

const NewItem = () => {
  const { postTitle,
    setPostTitle,
    postPrice,
    setPostPrice,
    setPostImg,
    setItems,
    postCategory,
    setPostCategory,
    postDescription,
    setPostDescription,
    onDelete} = useContext(Context);

  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    setPostImg(fileReader.result);
  };

  return (
    <div className='new'>
      <div className='new-main'>
        <h1>Добавить продукт</h1>

        <div className='new-div'>
          <h3>Опишите в подробностях</h3>

          <label>Укажите название*</label>
          <input placeholder='Например, iPhone14' className='new-title' value={postTitle} onChange={e => setPostTitle(e.target.value)}/>

          <label>Категория*</label>
          <select placeholder='Выберите категорию' className='new-category' value={postCategory} onChange={e => setPostCategory(e.target.value)}>
            <option value="food">Сухой корм</option>
            <option value="vitamins">Витамины и добавки</option>
            <option value="toys">Игрушки</option>
            <option value="clothes">Одежда</option>
            <option value="muzzle">Намордник</option>
          </select>
        </div>

        <div className='new-div'>
          <h3>Описание</h3>

          <label>Описание*</label>
          <textarea className='new-description' placeholder='Подумайте, какие подробности вы хотели бы узнать из объявления. И добавьте их в описание' value={postDescription} onChange={e => setPostDescription(e.target.value)}/>
        </div>

        <div className='new-div'>
          <h3>Стоимость</h3>

          <label>Цена*</label>
          <div className='new-price'>
            <input className='new-phone' placeholder='Цена' value={postPrice} onChange={e => setPostPrice(e.target.value)}/>
            <p className='new-tg'>тг.</p>
          </div>
        </div>

        <div className='new-div-btn'>
          <button className='new-btn1' onClick={() => {onDelete();}}>Очистить</button>

          <button className='new-btn2' onClick={() => {
            axios({
              method: 'post',
              url: 'https://63887325d94a7e50409bdb32.mockapi.io/api/items/item',
              data: {
                id : Number(setItems.length),
                title: postTitle,
                category: postCategory,
                description: postDescription,
                price: Number(postPrice),
                img: "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-no-photo-selfie-icon-image_1267182.jpg"
              }
            });
          }}>Опубликовать</button>
        </div> 
      </div>
    </div>
  );
};

export default NewItem;