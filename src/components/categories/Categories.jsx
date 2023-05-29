import React, { useEffect, useCallback, useMemo } from "react";
import "./Categories.css";

const Categories = ({ chooseCategory }) => {
  const categories = useMemo(
    () => [
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
    []
  );

  useEffect(() => {
    // Логика, выполняемая после монтирования компонента
    return () => {
      // Логика, выполняемая при размонтировании компонента
    };
  }, []);

  const handleCategoryClick = useCallback(
    (categoryKey) => {
      chooseCategory(categoryKey);
    },
    [chooseCategory]
  );

  return (
    <div className="categories">
      {categories.map((el) => (
        <div key={el.key} onClick={() => handleCategoryClick(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;

/*
В этом обновленном коде useEffect() используется для выполнения логики после монтирования и размонтирования компонента. useContext() не используется в этом компоненте, поскольку в вашем исходном коде не указан контекст. useCallback() используется для оптимизации функции обратного вызова handleCategoryClick, чтобы она не создавалась заново при каждом рендеринге компонента. useMemo() используется для оптимизации создания массива categories, чтобы он не создавался заново при каждом рендеринге компонента, если его зависимости не изменяются.
*/
