import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Все товары",
        },
        {
          key: "food",
          name: "Сухой корм",
        },
        {
          key: "vitamins",
          name: "Витамины и добавки",
        },
        {
          key: "toys",
          name: "Игрушки",
        },
        {
          key: "clothes",
          name: "Одежда",
        },
        {
          key: "muzzle",
          name: "Намордник",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
